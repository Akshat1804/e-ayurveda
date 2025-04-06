"use client"
import { useState } from "react"
import type React from "react"

import { Upload, FileText, CheckCircle } from "lucide-react"
import styles from "./upload.module.css"

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [symptoms, setSymptoms] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null
    setFile(selectedFile)
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!file) {
      setError("Please upload a medical report")
      return
    }

    if (!symptoms.trim()) {
      setError("Please describe your symptoms")
      return
    }

    setIsSubmitting(true)
    setError("")

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
        setFile(null)
        setSymptoms("")
      }, 3000)
    } catch (err) {
      setIsSubmitting(false)
      setError("An error occurred. Please try again.")
    }
  }

  return (
    <div className={styles.uploadPage}>
      <div className="container">
        <div className={styles.uploadContainer}>
          <div className={styles.uploadHeader}>
            <h1 className={styles.uploadTitle}>Upload Your Medical Report</h1>
            <p className={styles.uploadSubtitle}>
              Share your medical reports to receive personalized Ayurvedic recommendations
            </p>
          </div>

          <form className={styles.uploadForm} onSubmit={handleSubmit}>
            <div className={styles.fileUploadContainer}>
              <label className={styles.fileUploadLabel}>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className={styles.fileInput}
                  disabled={isSubmitting || isSuccess}
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
                      <p className={styles.uploadText}>Drag and drop your file here or click to browse</p>
                      <p className={styles.uploadHint}>Supports PDF, JPG, JPEG, PNG (Max 10MB)</p>
                    </div>
                  )}
                </div>
              </label>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="symptoms" className={styles.formLabel}>
                Describe Your Symptoms
              </label>
              <textarea
                id="symptoms"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="Please describe your symptoms, concerns, or health issues in detail..."
                className={styles.formTextarea}
                rows={6}
                disabled={isSubmitting || isSuccess}
              ></textarea>
            </div>

            {error && <div className={styles.errorMessage}>{error}</div>}

            <button type="submit" className={`btn ${styles.submitButton}`} disabled={isSubmitting || isSuccess}>
              {isSubmitting ? (
                "Processing..."
              ) : isSuccess ? (
                <span className={styles.successText}>
                  <CheckCircle size={18} /> Report Submitted Successfully
                </span>
              ) : (
                "Submit Report"
              )}
            </button>
          </form>

          <div className={styles.uploadInfo}>
            <h3 className={styles.infoTitle}>What Happens Next?</h3>
            <ol className={styles.infoSteps}>
              <li>Our Ayurvedic experts will analyze your medical report</li>
              <li>We'll identify potential imbalances in your doshas (Vata, Pitta, Kapha)</li>
              <li>You'll receive personalized recommendations within 24-48 hours</li>
              <li>Access your recommendations on the Remedies page or via email</li>
            </ol>
            <div className={styles.privacyNote}>
              <p>
                <strong>Privacy Note:</strong> Your medical information is kept strictly confidential and is only used
                to provide personalized Ayurvedic recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

