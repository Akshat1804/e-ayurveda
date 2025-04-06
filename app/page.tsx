import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Heart, Sun, Wind } from "lucide-react"
import styles from "./home.module.css"

export default function Home() {
  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} fade-in`}>Revive Naturally with E-Ayurveda</h1>
          <p className={`${styles.heroSubtitle} slide-up`}>
            Upload your medical report and receive traditional healing suggestions
          </p>
          <Link href="/upload" className={`btn ${styles.ctaButton} slide-up`}>
            Get Started <ArrowRight size={18} className={styles.btnIcon} />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className={`section ${styles.featuresSection}`}>
        <div className="container">
          <h2 className="section-title">Our Holistic Approach</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Leaf size={40} />
              </div>
              <h3 className={styles.featureTitle}>Natural Remedies</h3>
              <p className={styles.featureText}>
                Discover the power of herbs and natural ingredients that have been used for centuries in Ayurvedic
                medicine.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Heart size={40} />
              </div>
              <h3 className={styles.featureTitle}>Personalized Care</h3>
              <p className={styles.featureText}>
                Receive customized wellness recommendations based on your unique body constitution and health reports.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Sun size={40} />
              </div>
              <h3 className={styles.featureTitle}>Balanced Lifestyle</h3>
              <p className={styles.featureText}>
                Learn how to integrate Ayurvedic principles into your daily routine for optimal health and wellbeing.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Wind size={40} />
              </div>
              <h3 className={styles.featureTitle}>Mind-Body Harmony</h3>
              <p className={styles.featureText}>
                Explore practices that nurture both mental and physical health, creating balance in your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={`section ${styles.howItWorksSection}`}>
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className={styles.stepsContainer}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Upload Your Report</h3>
              <p className={styles.stepText}>Share your medical reports securely on our platform for analysis.</p>
            </div>
            <div className={styles.stepDivider}></div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Ayurvedic Analysis</h3>
              <p className={styles.stepText}>
                Our experts analyze your reports through the lens of traditional Ayurvedic principles.
              </p>
            </div>
            <div className={styles.stepDivider}></div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Receive Recommendations</h3>
              <p className={styles.stepText}>
                Get personalized remedies, lifestyle changes, and wellness practices tailored to your needs.
              </p>
            </div>
          </div>
          <div className={styles.ctaContainer}>
            <Link href="/upload" className="btn">
              Upload Your Report
            </Link>
            <Link href="/about" className="btn btn-secondary">
              Learn More About Ayurveda
            </Link>
            <Link href="/consultation" className="btn btn-secondary">
              Try AI Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`section ${styles.testimonialsSection}`}>
        <div className="container">
          <h2 className="section-title">What Our Users Say</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <p className={styles.testimonialText}>
                  "E-Ayurveda helped me understand my health issues from a completely different perspective. The
                  personalized remedies have made a significant difference in my wellbeing."
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>
                    <Image src="/placeholder.svg?height=60&width=60" alt="Priya S." width={60} height={60} />
                  </div>
                  <div>
                    <h4 className={styles.testimonialName}>Priya S.</h4>
                    <p className={styles.testimonialLocation}>Bangalore</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <p className={styles.testimonialText}>
                  "I was skeptical at first, but the dietary changes and herbs recommended by E-Ayurveda have helped
                  manage my chronic condition better than years of conventional treatments."
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>
                    <Image src="/placeholder.svg?height=60&width=60" alt="Rajesh M." width={60} height={60} />
                  </div>
                  <div>
                    <h4 className={styles.testimonialName}>Rajesh M.</h4>
                    <p className={styles.testimonialLocation}>Mumbai</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <p className={styles.testimonialText}>
                  "The holistic approach of E-Ayurveda addresses not just symptoms but the root causes. I've experienced
                  improved energy levels and better sleep since following their recommendations."
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>
                    <Image src="/placeholder.svg?height=60&width=60" alt="Anita K." width={60} height={60} />
                  </div>
                  <div>
                    <h4 className={styles.testimonialName}>Anita K.</h4>
                    <p className={styles.testimonialLocation}>Delhi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={`section ${styles.newsletterSection}`}>
        <div className="container">
          <div className={styles.newsletterContainer}>
            <div className={styles.newsletterContent}>
              <h2 className={styles.newsletterTitle}>Stay Updated with Ayurvedic Wisdom</h2>
              <p className={styles.newsletterText}>
                Subscribe to our newsletter for seasonal health tips, herbal remedies, and wellness practices.
              </p>
            </div>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="Your email address" className={styles.newsletterInput} required />
              <button type="submit" className={`btn ${styles.newsletterBtn}`}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

