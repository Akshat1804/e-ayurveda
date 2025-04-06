import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import styles from "./remedies.module.css"

export default function RemediesPage() {
  return (
    <div className={styles.remediesPage}>
      {/* Hero Section */}
      <section className={styles.remediesHero}>
        <div className="container">
          <div className={styles.remediesHeroContent}>
            <h1 className={styles.remediesTitle}>Personalized Ayurvedic Remedies</h1>
            <p className={styles.remediesSubtitle}>
              Discover natural healing solutions tailored to your unique constitution
            </p>
            <Link href="/upload" className={`btn ${styles.uploadBtn}`}>
              Upload Your Report for Personalized Recommendations
            </Link>
          </div>
        </div>
      </section>

      {/* Placeholder for Personalized Remedies */}
      <section className={`section ${styles.personalizedSection}`}>
        <div className="container">
          <div className={styles.personalizedContainer}>
            <div className={styles.personalizedHeader}>
              <h2 className={styles.personalizedTitle}>Your Personalized Recommendations</h2>
              <p className={styles.personalizedSubtitle}>
                Upload your medical report to receive customized Ayurvedic remedies and lifestyle recommendations
              </p>
            </div>

            <div className={styles.placeholderContent}>
              <div className={styles.placeholderIcon}>
                <Image src="/placeholder.svg?height=120&width=120" alt="Upload icon" width={120} height={120} />
              </div>
              <h3 className={styles.placeholderTitle}>No Recommendations Yet</h3>
              <p className={styles.placeholderText}>
                To receive your personalized Ayurvedic recommendations, please upload your medical report and describe
                your symptoms.
              </p>
              <Link href="/upload" className="btn">
                Upload Your Report
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Common Remedies Section */}
      <section className={`section ${styles.commonRemediesSection}`}>
        <div className="container">
          <h2 className="section-title">Common Ayurvedic Remedies</h2>
          <p className={styles.commonRemediesIntro}>
            While personalized recommendations are most effective, here are some common Ayurvedic remedies that can
            benefit various conditions:
          </p>

          <div className={styles.remediesGrid}>
            <div className={styles.remedyCard}>
              <div className={styles.remedyImage}>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Turmeric"
                  width={300}
                  height={200}
                  className={styles.remedyImg}
                />
              </div>
              <div className={styles.remedyContent}>
                <h3 className={styles.remedyTitle}>Turmeric (Haldi)</h3>
                <p className={styles.remedyDesc}>
                  A powerful anti-inflammatory and antioxidant herb that supports joint health, digestion, and immune
                  function.
                </p>
                <div className={styles.remedyUsage}>
                  <h4>Common Uses:</h4>
                  <ul>
                    <li>Inflammation and joint pain</li>
                    <li>Digestive disorders</li>
                    <li>Skin conditions</li>
                    <li>Immune support</li>
                  </ul>
                </div>
                <Link href="/remedies/turmeric" className={styles.remedyLink}>
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className={styles.remedyCard}>
              <div className={styles.remedyImage}>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Ashwagandha"
                  width={300}
                  height={200}
                  className={styles.remedyImg}
                />
              </div>
              <div className={styles.remedyContent}>
                <h3 className={styles.remedyTitle}>Ashwagandha</h3>
                <p className={styles.remedyDesc}>
                  An adaptogenic herb that helps the body manage stress and promotes overall vitality and wellbeing.
                </p>
                <div className={styles.remedyUsage}>
                  <h4>Common Uses:</h4>
                  <ul>
                    <li>Stress and anxiety</li>
                    <li>Fatigue and low energy</li>
                    <li>Sleep disorders</li>
                    <li>Immune enhancement</li>
                  </ul>
                </div>
                <Link href="/remedies/ashwagandha" className={styles.remedyLink}>
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className={styles.remedyCard}>
              <div className={styles.remedyImage}>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Triphala"
                  width={300}
                  height={200}
                  className={styles.remedyImg}
                />
              </div>
              <div className={styles.remedyContent}>
                <h3 className={styles.remedyTitle}>Triphala</h3>
                <p className={styles.remedyDesc}>
                  A traditional Ayurvedic formulation of three fruits that supports digestion, detoxification, and
                  rejuvenation.
                </p>
                <div className={styles.remedyUsage}>
                  <h4>Common Uses:</h4>
                  <ul>
                    <li>Digestive health</li>
                    <li>Gentle detoxification</li>
                    <li>Eye health</li>
                    <li>Colon cleansing</li>
                  </ul>
                </div>
                <Link href="/remedies/triphala" className={styles.remedyLink}>
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className={styles.remedyCard}>
              <div className={styles.remedyImage}>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Brahmi"
                  width={300}
                  height={200}
                  className={styles.remedyImg}
                />
              </div>
              <div className={styles.remedyContent}>
                <h3 className={styles.remedyTitle}>Brahmi (Bacopa)</h3>
                <p className={styles.remedyDesc}>
                  A cognitive enhancer that supports brain function, memory, and mental clarity while reducing stress.
                </p>
                <div className={styles.remedyUsage}>
                  <h4>Common Uses:</h4>
                  <ul>
                    <li>Memory enhancement</li>
                    <li>Cognitive function</li>
                    <li>Anxiety and stress</li>
                    <li>ADHD symptoms</li>
                  </ul>
                </div>
                <Link href="/remedies/brahmi" className={styles.remedyLink}>
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Recommendations */}
      <section className={`section ${styles.lifestyleSection}`}>
        <div className="container">
          <h2 className="section-title">Ayurvedic Lifestyle Practices</h2>
          <p className={styles.lifestyleIntro}>
            Ayurveda emphasizes that daily routines and lifestyle practices are just as important as herbal remedies for
            maintaining balance and health.
          </p>

          <div className={styles.lifestyleGrid}>
            <div className={styles.lifestyleCard}>
              <div className={styles.lifestyleIcon}>
                <Image src="/placeholder.svg?height=80&width=80" alt="Dinacharya icon" width={80} height={80} />
              </div>
              <h3 className={styles.lifestyleTitle}>Dinacharya (Daily Routine)</h3>
              <p className={styles.lifestyleDesc}>
                Following a consistent daily routine aligned with natural cycles helps maintain balance in the doshas
                and supports overall health.
              </p>
              <ul className={styles.lifestyleTips}>
                <li>Wake up before sunrise</li>
                <li>Practice oil pulling and tongue scraping</li>
                <li>Perform self-massage with warm oil (Abhyanga)</li>
                <li>Eat meals at consistent times</li>
              </ul>
            </div>

            <div className={styles.lifestyleCard}>
              <div className={styles.lifestyleIcon}>
                <Image src="/placeholder.svg?height=80&width=80" alt="Nutrition icon" width={80} height={80} />
              </div>
              <h3 className={styles.lifestyleTitle}>Ayurvedic Nutrition</h3>
              <p className={styles.lifestyleDesc}>
                Eating according to your dosha type and following mindful eating practices supports digestion and
                overall health.
              </p>
              <ul className={styles.lifestyleTips}>
                <li>Eat your largest meal at midday</li>
                <li>Include all six tastes in your diet</li>
                <li>Avoid cold drinks with meals</li>
                <li>Eat in a calm, peaceful environment</li>
              </ul>
            </div>

            <div className={styles.lifestyleCard}>
              <div className={styles.lifestyleIcon}>
                <Image src="/placeholder.svg?height=80&width=80" alt="Yoga icon" width={80} height={80} />
              </div>
              <h3 className={styles.lifestyleTitle}>Yoga & Pranayama</h3>
              <p className={styles.lifestyleDesc}>
                Specific yoga postures and breathing techniques can help balance your dominant dosha and support overall
                wellbeing.
              </p>
              <ul className={styles.lifestyleTips}>
                <li>Practice gentle yoga asanas daily</li>
                <li>Include alternate nostril breathing</li>
                <li>Perform Sun Salutations in the morning</li>
                <li>End with meditation or relaxation</li>
              </ul>
            </div>

            <div className={styles.lifestyleCard}>
              <div className={styles.lifestyleIcon}>
                <Image src="/placeholder.svg?height=80&width=80" alt="Meditation icon" width={80} height={80} />
              </div>
              <h3 className={styles.lifestyleTitle}>Mental Wellness</h3>
              <p className={styles.lifestyleDesc}>
                Ayurveda recognizes the profound connection between mental and physical health, offering practices to
                support emotional balance.
              </p>
              <ul className={styles.lifestyleTips}>
                <li>Practice meditation daily</li>
                <li>Engage in mindfulness throughout the day</li>
                <li>Spend time in nature</li>
                <li>Practice gratitude and positive thinking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Download Options */}
      <section className={`section ${styles.downloadSection}`}>
        <div className="container">
          <div className={styles.downloadContainer}>
            <div className={styles.downloadContent}>
              <h2 className={styles.downloadTitle}>Access Your Recommendations Anywhere</h2>
              <p className={styles.downloadText}>
                After uploading your medical report and receiving your personalized recommendations, you can download
                them as a PDF or receive SMS alerts with daily tips.
              </p>
              <div className={styles.downloadOptions}>
                <div className={styles.downloadOption}>
                  <h3>PDF Download</h3>
                  <p>Get a comprehensive guide with all your personalized recommendations in one document.</p>
                </div>
                <div className={styles.downloadOption}>
                  <h3>SMS Alerts</h3>
                  <p>Receive daily reminders and tips based on your personalized Ayurvedic plan.</p>
                </div>
              </div>
            </div>
            <div className={styles.downloadImage}>
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Mobile and PDF mockup"
                width={400}
                height={300}
                className={styles.mockupImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.remediesCta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready for Your Personalized Ayurvedic Journey?</h2>
            <p className={styles.ctaText}>
              Upload your medical report today and receive customized recommendations tailored to your unique
              constitution and health needs.
            </p>
            <Link href="/upload" className="btn">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

