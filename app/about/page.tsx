import Image from "next/image"
import Link from "next/link"
import styles from "./about.module.css"

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.aboutHero}>
        <div className="container">
          <div className={styles.aboutHeroContent}>
            <h1 className={styles.aboutTitle}>About Ayurveda</h1>
            <p className={styles.aboutSubtitle}>Ancient wisdom for modern wellness</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className={`section ${styles.introSection}`}>
        <div className="container">
          <div className={styles.introContent}>
            <div className={styles.introText}>
              <h2 className={styles.sectionTitle}>The Science of Life</h2>
              <p className={styles.introParagraph}>
                Ayurveda, which translates to "knowledge of life," is one of the world's oldest holistic healing
                systems. Developed more than 5,000 years ago in India, it's based on the belief that health and wellness
                depend on a delicate balance between the mind, body, and spirit.
              </p>
              <p className={styles.introParagraph}>
                The primary focus of Ayurveda is to promote good health, rather than fight disease. However, treatments
                may be recommended for specific health problems. In Ayurveda, it's believed that everything in the
                universe – living or not – is connected. Good health is achieved when your mind, body, and spirit are in
                harmony with the universe.
              </p>
              <Link href="/upload" className="btn">
                Experience Ayurvedic Healing
              </Link>
            </div>
            <div className={styles.introImage}>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Ayurvedic herbs and treatments"
                width={500}
                height={400}
                className={styles.aboutImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className={`section ${styles.principlesSection}`}>
        <div className="container">
          <h2 className="section-title">The Three Doshas</h2>
          <p className={styles.principlesIntro}>
            According to Ayurvedic theory, every individual has a unique combination of three doshas, which are
            biological energies found throughout the human body and mind. They govern all physical and mental processes
            and provide a unique blueprint for health and fulfillment.
          </p>

          <div className={styles.doshaCards}>
            <div className={styles.doshaCard}>
              <div className={`${styles.doshaIcon} ${styles.vataIcon}`}>
                <span>Vata</span>
              </div>
              <h3 className={styles.doshaTitle}>Vata</h3>
              <p className={styles.doshaDesc}>
                Composed of Space and Air, Vata governs movement and is responsible for basic body processes such as
                breathing, cell division, and the nervous system. When in balance, Vata promotes creativity and
                flexibility. When imbalanced, Vata produces fear and anxiety.
              </p>
              <ul className={styles.doshaTraits}>
                <li>Governs movement and change</li>
                <li>Light, cold, dry, and mobile</li>
                <li>Controls breath and thought</li>
                <li>Located in colon, pelvis, bones, skin</li>
              </ul>
            </div>

            <div className={styles.doshaCard}>
              <div className={`${styles.doshaIcon} ${styles.pittaIcon}`}>
                <span>Pitta</span>
              </div>
              <h3 className={styles.doshaTitle}>Pitta</h3>
              <p className={styles.doshaDesc}>
                Composed of Fire and Water, Pitta governs digestion, metabolism, and energy production. When in balance,
                Pitta promotes understanding and intelligence. When imbalanced, Pitta arouses anger, hatred, and
                jealousy.
              </p>
              <ul className={styles.doshaTraits}>
                <li>Governs digestion and metabolism</li>
                <li>Hot, sharp, light, and oily</li>
                <li>Controls hunger and thirst</li>
                <li>Located in small intestine, stomach, liver</li>
              </ul>
            </div>

            <div className={styles.doshaCard}>
              <div className={`${styles.doshaIcon} ${styles.kaphaIcon}`}>
                <span>Kapha</span>
              </div>
              <h3 className={styles.doshaTitle}>Kapha</h3>
              <p className={styles.doshaDesc}>
                Composed of Earth and Water, Kapha governs structure and fluid balance. When in balance, Kapha expresses
                love, calmness, and forgiveness. When imbalanced, it can lead to attachment, greed, and envy.
              </p>
              <ul className={styles.doshaTraits}>
                <li>Governs structure and cohesion</li>
                <li>Heavy, cold, oily, and slow</li>
                <li>Controls weight and stability</li>
                <li>Located in chest, lungs, throat</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className={`section ${styles.historySection}`}>
        <div className="container">
          <h2 className="section-title">The Rich History of Ayurveda</h2>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>5000 BCE</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Origins in Vedic Culture</h3>
                <p className={styles.timelineText}>
                  Ayurveda's origins can be traced to the Vedic period in ancient India. The knowledge was passed down
                  orally through generations of sages and physicians.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>1500 BCE</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Compilation of Atharva Veda</h3>
                <p className={styles.timelineText}>
                  Ayurvedic concepts were first documented in the Atharva Veda, one of the four sacred texts of
                  Hinduism, containing hymns and mantras for healing.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>600 BCE</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Formalization of Ayurvedic Schools</h3>
                <p className={styles.timelineText}>
                  Formal schools of Ayurveda were established, with systematic training for physicians. The Charaka
                  Samhita, a foundational text, was compiled during this period.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>300 BCE</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Sushruta Samhita</h3>
                <p className={styles.timelineText}>
                  Sushruta, known as the father of surgery, compiled the Sushruta Samhita, which detailed over 300
                  surgical procedures and 120 surgical instruments.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>Modern Era</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Global Recognition</h3>
                <p className={styles.timelineText}>
                  Today, Ayurveda is recognized globally as a comprehensive system of medicine. In 2014, the Indian
                  government established AYUSH (Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy) as a
                  separate ministry to promote traditional healing systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className={`section ${styles.researchSection}`}>
        <div className="container">
          <h2 className="section-title">Modern Research & Validation</h2>

          <div className={styles.researchContent}>
            <div className={styles.researchText}>
              <p className={styles.researchParagraph}>
                Modern scientific research is increasingly validating many Ayurvedic practices and remedies. Studies
                have shown the effectiveness of herbs like Ashwagandha for stress reduction, Turmeric for inflammation,
                and Triphala for digestive health.
              </p>
              <p className={styles.researchParagraph}>
                The Indian government's AYUSH Research Portal provides access to hundreds of scientific studies on
                Ayurvedic treatments and their efficacy for various health conditions.
              </p>
              <div className={styles.researchLinks}>
                <h3>Explore Research Resources:</h3>
                <ul>
                  <li>
                    <a href="https://ayush.gov.in/" target="_blank" rel="noopener noreferrer">
                      AYUSH Research Portal
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ncbi.nlm.nih.gov/pmc/?term=ayurveda" target="_blank" rel="noopener noreferrer">
                      PubMed Ayurveda Studies
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.who.int/traditional-complementary-integrative-medicine/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WHO Traditional Medicine Strategy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.researchImage}>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Ayurvedic research and modern validation"
                width={500}
                height={400}
                className={styles.aboutImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Begin Your Ayurvedic Journey</h2>
            <p className={styles.ctaText}>
              Upload your medical report and receive personalized Ayurvedic recommendations tailored to your unique
              constitution and health needs.
            </p>
            <Link href="/upload" className={`btn ${styles.ctaButton}`}>
              Upload Your Report
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

