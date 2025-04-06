"use client"
import { useState } from "react"
import type React from "react"

import { Upload, FileText, AlertCircle, CheckCircle, Loader2, Info } from "lucide-react"
import Link from "next/link"
import styles from "./consultation.module.css"

type RecommendationResult = {
  yoga: string
  ayurveda: string
  homeopathy: string
}

type AnalysisResult = {
  message: string
  results: RecommendationResult
  pdf_text: string
}

export default function ConsultationPage() {
  const [symptoms, setSymptoms] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [isDemoMode, setIsDemoMode] = useState(false)
  const [textResult, setTextResult] = useState<RecommendationResult | null>(null)
  const [pdfResult, setPdfResult] = useState<AnalysisResult | null>(null)
  const [activeTab, setActiveTab] = useState("text")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null
    if (selectedFile && !selectedFile.name.toLowerCase().endsWith(".pdf")) {
      setError("Please upload a PDF file")
      return
    }
    setFile(selectedFile)
    setError("")
  }

  // Update the error handling in the handleTextSubmit function
  const handleTextSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!symptoms.trim()) {
      setError("Please describe your symptoms")
      return
    }

    setIsLoading(true)
    setError("")
    setIsDemoMode(false)
    setTextResult(null)

    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ symptoms }),
      })

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`)
      }

      const data = await response.json()
      setTextResult(data)

      // Check if we got mock data
      if (response.headers.get("X-Mock-Data") === "true") {
        setIsDemoMode(true)
      }
    } catch (err) {
      console.error("Error submitting symptoms:", err)
      setError("An error occurred while processing your request.")

      // Provide fallback data directly in the component
      setTextResult({
        yoga: "Pranayama (breathing exercises), Surya Namaskar (Sun Salutation), and gentle stretching poses.",
        ayurveda: "Ashwagandha for stress relief, Triphala for digestive health, and warm ginger tea with honey.",
        homeopathy:
          "Nux Vomica 30C for digestive issues, Arnica 30C for muscle soreness, and Bryonia 30C for dry cough.",
      })
      setIsDemoMode(true)
    } finally {
      setIsLoading(false)
    }
  }

  // Update the error handling in the handlePdfSubmit function
  const handlePdfSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!file) {
      setError("Please upload a medical report")
      return
    }

    setIsLoading(true)
    setError("")
    setIsDemoMode(false)
    setPdfResult(null)

    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("description", symptoms)

      const response = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`)
      }

      const data = await response.json()
      setPdfResult(data)

      // Check if we got mock data
      if (response.headers.get("X-Mock-Data") === "true") {
        setIsDemoMode(true)
      }
    } catch (err) {
      console.error("Error analyzing PDF:", err)
      setError("An error occurred while analyzing your PDF.")

      // Provide fallback data directly in the component
      setPdfResult({
        message: "Analysis complete (demo mode)",
        results: {
          yoga: "Vajrasana (Diamond Pose) after meals, Bhujangasana (Cobra Pose) for back strength, and Shavasana (Corpse Pose) for relaxation.",
          ayurveda:
            "Chyawanprash in the morning, Brahmi oil for head massage, and a diet rich in fresh vegetables and fruits.",
          homeopathy:
            "Pulsatilla 30C for mood swings, Calcarea Carbonica 30C for fatigue, and Phosphorus 30C for respiratory support.",
        },
        pdf_text:
          "This is a sample text that would normally be extracted from your uploaded PDF document. In demo mode, we're showing this placeholder text instead.",
      })
      setIsDemoMode(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.consultationPage}>
      <div className="container">
        <div className={styles.consultationContainer}>
          <div className={styles.consultationHeader}>
            <h1 className={styles.consultationTitle}>AI-Powered Ayurvedic Consultation</h1>
            <p className={styles.consultationSubtitle}>
              Get personalized Ayurvedic, Yoga, and Homeopathy recommendations based on your symptoms or medical reports
            </p>
          </div>

          <div className={styles.tabsContainer}>
            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${activeTab === "text" ? styles.activeTab : ""}`}
                onClick={() => setActiveTab("text")}
              >
                Describe Symptoms
              </button>
              <button
                className={`${styles.tab} ${activeTab === "pdf" ? styles.activeTab : ""}`}
                onClick={() => setActiveTab("pdf")}
              >
                Upload Medical Report
              </button>
            </div>

            <div className={styles.tabContent}>
              {activeTab === "text" ? (
                <form className={styles.consultationForm} onSubmit={handleTextSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="symptoms" className={styles.formLabel}>
                      Describe Your Symptoms or Medical Condition
                    </label>
                    <textarea
                      id="symptoms"
                      value={symptoms}
                      onChange={(e) => setSymptoms(e.target.value)}
                      placeholder="Please describe your symptoms, concerns, or health issues in detail..."
                      className={styles.formTextarea}
                      rows={6}
                      disabled={isLoading}
                    ></textarea>
                  </div>

                  {error && (
                    <div className={styles.errorMessage}>
                      <AlertCircle size={18} />
                      <span>{error}</span>
                    </div>
                  )}

                  <button type="submit" className={`btn ${styles.submitButton}`} disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 size={18} className={styles.spinner} />
                        Processing...
                      </>
                    ) : (
                      "Get Recommendations"
                    )}
                  </button>
                </form>
              ) : (
                <form className={styles.consultationForm} onSubmit={handlePdfSubmit}>
                  <div className={styles.fileUploadContainer}>
                    <label className={styles.fileUploadLabel}>
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className={styles.fileInput}
                        disabled={isLoading}
                      />
                      <div className={styles.uploadBox}>
                        {file ? (
                          <div className={styles.filePreview}>
                            <FileText size={40} />
                            <p className={styles.fileName}>{file.name}</p>
                            <p className={styles.fileSize}>{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                          </div>
                        ) : (
                          <div className={styles.uploadPrompt}>
                            <Upload size={40} />
                            <p className={styles.uploadText}>
                              Drag and drop your medical report here or click to browse
                            </p>
                            <p className={styles.uploadHint}>Supports PDF files only (Max 10MB)</p>
                          </div>
                        )}
                      </div>
                    </label>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="pdfDescription" className={styles.formLabel}>
                      Additional Information (Optional)
                    </label>
                    <textarea
                      id="pdfDescription"
                      value={symptoms}
                      onChange={(e) => setSymptoms(e.target.value)}
                      placeholder="Add any additional details about your condition that might not be in the report..."
                      className={styles.formTextarea}
                      rows={4}
                      disabled={isLoading}
                    ></textarea>
                  </div>

                  {error && (
                    <div className={styles.errorMessage}>
                      <AlertCircle size={18} />
                      <span>{error}</span>
                    </div>
                  )}

                  <button type="submit" className={`btn ${styles.submitButton}`} disabled={isLoading || !file}>
                    {isLoading ? (
                      <>
                        <Loader2 size={18} className={styles.spinner} />
                        Analyzing Report...
                      </>
                    ) : (
                      "Analyze Medical Report"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Results Section */}
          {(textResult || pdfResult) && (
            <div className={styles.resultsContainer}>
              {isDemoMode && (
                <div className={styles.demoModeMessage}>
                  <Info size={18} />
                  <span>
                    You are viewing demo recommendations. In a production environment, these would be personalized based
                    on your actual symptoms or medical report using our AI model.
                  </span>
                </div>
              )}

              <div className={styles.resultsHeader}>
                <CheckCircle size={24} className={styles.successIcon} />
                <h2 className={styles.resultsTitle}>Your Personalized Recommendations</h2>
              </div>

              <div className={styles.recommendationsGrid}>
                <div className={styles.recommendationCard}>
                  <h3 className={styles.recommendationTitle}>Ayurvedic Remedies</h3>
                  <p className={styles.recommendationText}>{textResult?.ayurveda || pdfResult?.results.ayurveda}</p>
                  <Link href="/remedies" className={styles.learnMoreLink}>
                    Learn more about Ayurvedic treatments
                  </Link>
                </div>

                <div className={styles.recommendationCard}>
                  <h3 className={styles.recommendationTitle}>Yoga Practices</h3>
                  <p className={styles.recommendationText}>{textResult?.yoga || pdfResult?.results.yoga}</p>
                  <Link href="/yoga" className={styles.learnMoreLink}>
                    Learn more about Yoga practices
                  </Link>
                </div>

                <div className={styles.recommendationCard}>
                  <h3 className={styles.recommendationTitle}>Homeopathic Remedies</h3>
                  <p className={styles.recommendationText}>{textResult?.homeopathy || pdfResult?.results.homeopathy}</p>
                  <Link href="/homeopathy" className={styles.learnMoreLink}>
                    Learn more about Homeopathy
                  </Link>
                </div>
              </div>

              {pdfResult && (
                <div className={styles.pdfExtractContainer}>
                  <h3 className={styles.pdfExtractTitle}>Extracted Text from Your Report</h3>
                  <div className={styles.pdfExtract}>
                    <p>{pdfResult.pdf_text}</p>
                  </div>
                </div>
              )}

              <div className={styles.disclaimerBox}>
                <AlertCircle size={18} />
                <p>
                  <strong>Disclaimer:</strong> These recommendations are generated by an AI system and should not
                  replace professional medical advice. Always consult with a healthcare provider before starting any new
                  treatment.
                </p>
              </div>
            </div>
          )}

          <div className={styles.infoSection}>
            <h2 className={styles.infoTitle}>How Our AI Recommendation System Works</h2>
            <div className={styles.infoSteps}>
              <div className={styles.infoStep}>
                <div className={styles.infoStepNumber}>1</div>
                <h3>Input Your Information</h3>
                <p>Describe your symptoms in detail or upload your medical reports for more accurate analysis.</p>
              </div>
              <div className={styles.infoStep}>
                <div className={styles.infoStepNumber}>2</div>
                <h3>AI Analysis</h3>
                <p>
                  Our advanced machine learning model analyzes your information based on traditional AYUSH principles.
                </p>
              </div>
              <div className={styles.infoStep}>
                <div className={styles.infoStepNumber}>3</div>
                <h3>Personalized Recommendations</h3>
                <p>Receive tailored recommendations across Ayurveda, Yoga, and Homeopathy modalities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

