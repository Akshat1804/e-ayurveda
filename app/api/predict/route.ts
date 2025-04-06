import { NextResponse } from "next/server"

// Mock data for when the actual API is not available
const mockRecommendations = {
  yoga: "Pranayama (breathing exercises), Surya Namaskar (Sun Salutation), and gentle stretching poses like Paschimottanasana (Seated Forward Bend).",
  ayurveda:
    "Ashwagandha for stress relief, Triphala for digestive health, and warm ginger tea with honey in the morning.",
  homeopathy: "Nux Vomica 30C for digestive issues, Arnica 30C for muscle soreness, and Bryonia 30C for dry cough.",
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
    const data = await request.json()

    // If we're in a preview environment, don't even try to connect to localhost
    if (isPreviewEnvironment()) {
      console.log("Preview environment detected, using mock data without attempting backend connection")
      return NextResponse.json(mockRecommendations, {
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

      // Try to call the FastAPI backend
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ symptoms: data.symptoms }),
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
      return NextResponse.json(mockRecommendations, {
        headers: {
          "X-Mock-Data": "true",
          "X-Mock-Reason": "connection-failed",
        },
      })
    }
  } catch (error) {
    console.error("Error processing request:", error instanceof Error ? error.message : "Unknown error")
    return NextResponse.json({ error: "Failed to process your request" }, { status: 500 })
  }
}

