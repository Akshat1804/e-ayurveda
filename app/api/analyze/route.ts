import { NextResponse } from "next/server"

// Mock data for when the actual API is not available
const mockAnalysisResult = {
  message: "Analysis complete",
  results: {
    yoga: "Vajrasana (Diamond Pose) after meals, Bhujangasana (Cobra Pose) for back strength, and Shavasana (Corpse Pose) for relaxation.",
    ayurveda:
      "Chyawanprash in the morning, Brahmi oil for head massage, and a diet rich in fresh vegetables and fruits.",
    homeopathy:
      "Pulsatilla 30C for mood swings, Calcarea Carbonica 30C for fatigue, and Phosphorus 30C for respiratory support.",
  },
  pdf_text:
    "Sample extracted text from your medical report. This would normally contain the actual text extracted from your uploaded PDF document.",
}

// Helper function to check if we're in a preview environment
const isPreviewEnvironment = () => {
  // In a browser environment, we're likely not connecting to localhost:8000
  // In a Node.js environment on Vercel, VERCEL_ENV would be set
  // If neither condition is met, we're probably in local development
  return typeof window !== "undefined" || process.env.VERCEL_ENV === "preview" || !process.env.VERCEL
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const description = (formData.get("description") as string) || ""

    // If we're in a preview environment, don't even try to connect to localhost
    if (isPreviewEnvironment()) {
      console.log("Preview environment detected, using mock data without attempting backend connection")
      return NextResponse.json(mockAnalysisResult, {
        headers: {
          "X-Mock-Data": "true",
          "X-Mock-Reason": "preview-environment",
        },
      })
    }

    try {
      // Add a timeout to the fetch request
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 3000) // 3 second timeout

      // Create a new FormData to send to the FastAPI backend
      const apiFormData = new FormData()
      apiFormData.append("file", file)
      apiFormData.append("description", description)

      // Call the FastAPI backend
      const response = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        body: apiFormData,
        signal: controller.signal,
      })

      clearTimeout(timeoutId) // Clear the timeout

      if (!response.ok) {
        throw new Error(`Backend API returned status: ${response.status}`)
      }

      const result = await response.json()
      return NextResponse.json(result)
    } catch (fetchError) {
      // Don't log the full error in production, just a simple message
      console.log("Using mock data: Backend connection failed or timed out")

      // Return mock data with a custom header to indicate it's mock data
      return NextResponse.json(mockAnalysisResult, {
        headers: {
          "X-Mock-Data": "true",
          "X-Mock-Reason": "connection-failed",
        },
      })
    }
  } catch (error) {
    console.error("Error processing request:", error instanceof Error ? error.message : "Unknown error")
    return NextResponse.json({ error: "Failed to process your PDF" }, { status: 500 })
  }
}

