"use client"
import { useState } from "react"
import type React from "react"

import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"
import styles from "./contact.module.css"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    subscribe: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields")
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
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          subscribe: false,
        })
      }, 3000)
    } catch (err) {
      setIsSubmitting(false)
      setError("An error occurred. Please try again.")
    }
  }

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.contactHero}>
        <div className="container">
          <div className={styles.contactHeroContent}>
            <h1 className={styles.contactTitle}>Contact Us</h1>
            <p className={styles.contactSubtitle}>
              We're here to answer your questions and provide guidance on your Ayurvedic journey
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.contactContainer}>
            <div className={styles.contactInfo}>
              <h2 className={styles.infoTitle}>Get in Touch</h2>
              <p className={styles.infoText}>
                Have questions about Ayurvedic treatments, our platform, or your personalized recommendations? Our team
                of experts is here to help.
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <MapPin size={24} />
                  </div>
                  <div className={styles.contactText}>
                    <h3>Visit Us</h3>
                    <p>E-Ayurveda Wellness Center</p>
                    <p>123 Green Avenue, Bangalore</p>
                    <p>Karnataka, India - 560001</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <Phone size={24} />
                  </div>
                  <div className={styles.contactText}>
                    <h3>Call Us</h3>
                    <p>+91 98765 43210</p>
                    <p>+91 87654 32109</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <Mail size={24} />
                  </div>
                  <div className={styles.contactText}>
                    <h3>Email Us</h3>
                    <p>info@e-ayurveda.com</p>
                    <p>support@e-ayurveda.com</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <Clock size={24} />
                  </div>
                  <div className={styles.contactText}>
                    <h3>Working Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.contactForm}>
              <h2 className={styles.formTitle}>Send Us a Message</h2>

              {isSuccess ? (
                <div className={styles.successMessage}>
                  <CheckCircle size={40} />
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for contacting us. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.formLabel}>
                        Name <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.formInput}
                        placeholder="Your name"
                        disabled={isSubmitting}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.formLabel}>
                        Email <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.formInput}
                        placeholder="Your email address"
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone" className={styles.formLabel}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={styles.formInput}
                        placeholder="Your phone number"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="subject" className={styles.formLabel}>
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={styles.formSelect}
                        disabled={isSubmitting}
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="report">Report Upload Issue</option>
                        <option value="recommendations">Recommendations Question</option>
                        <option value="appointment">Schedule Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>
                      Message <span className={styles.required}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={styles.formTextarea}
                      placeholder="Your message"
                      rows={6}
                      disabled={isSubmitting}
                      required
                    ></textarea>
                  </div>

                  <div className={styles.formCheckbox}>
                    <input
                      type="checkbox"
                      id="subscribe"
                      name="subscribe"
                      checked={formData.subscribe}
                      onChange={handleCheckboxChange}
                      disabled={isSubmitting}
                    />
                    <label htmlFor="subscribe">Subscribe to our newsletter for Ayurvedic tips and updates</label>
                  </div>

                  {error && <div className={styles.errorMessage}>{error}</div>}

                  <button type="submit" className={`btn ${styles.submitButton}`} disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          {/* This would be replaced with an actual map integration */}
          <div className={styles.mapPlaceholder}>
            <p>Map Location: E-Ayurveda Wellness Center, Bangalore</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>

          <div className={styles.faqContainer}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>How long does it take to receive my personalized recommendations?</h3>
              <p className={styles.faqAnswer}>
                After uploading your medical report, you can expect to receive your personalized Ayurvedic
                recommendations within 24-48 hours. Our experts carefully analyze your reports to provide the most
                appropriate suggestions.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>
                Are the Ayurvedic remedies safe to use alongside conventional medicine?
              </h3>
              <p className={styles.faqAnswer}>
                Many Ayurvedic remedies can complement conventional treatments, but it's important to consult with both
                your physician and our Ayurvedic experts before combining treatments. Some herbs may interact with
                medications.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>How secure is my medical information on your platform?</h3>
              <p className={styles.faqAnswer}>
                We take data security very seriously. All medical reports and personal information are encrypted and
                stored securely. We comply with data protection regulations and never share your information with third
                parties without your consent.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Can I schedule a consultation with an Ayurvedic practitioner?</h3>
              <p className={styles.faqAnswer}>
                Yes, we offer virtual consultations with certified Ayurvedic practitioners. You can schedule an
                appointment through our platform or by contacting our support team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

