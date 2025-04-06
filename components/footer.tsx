import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>E-Ayurveda</h3>
            <p className={styles.footerText}>
              Revive naturally with traditional Ayurvedic healing methods and personalized wellness solutions.
            </p>
            <div className={styles.socialIcons}>
              <Link href="https://facebook.com" className={styles.socialIcon}>
                <Facebook size={20} />
              </Link>
              <Link href="https://twitter.com" className={styles.socialIcon}>
                <Twitter size={20} />
              </Link>
              <Link href="https://instagram.com" className={styles.socialIcon}>
                <Instagram size={20} />
              </Link>
              <Link href="https://youtube.com" className={styles.socialIcon}>
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Ayurveda</Link>
              </li>
              <li>
                <Link href="/remedies">Remedies</Link>
              </li>
              <li>
                <Link href="/upload">Upload Report</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Resources</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="https://ayush.gov.in/" target="_blank">
                  AYUSH Portal
                </Link>
              </li>
              <li>
                <Link href="/blog">Ayurveda Blog</Link>
              </li>
              <li>
                <Link href="/research">Research Papers</Link>
              </li>
              <li>
                <Link href="/faq">FAQs</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contact</h3>
            <address className={styles.contactInfo}>
              <p>Email: info@e-ayurveda.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>Address: Wellness Center, Green Avenue, Bangalore, India</p>
            </address>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} E-Ayurveda. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

