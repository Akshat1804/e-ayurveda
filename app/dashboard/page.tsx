"use client"
import { useState, useEffect } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { fetchAyushData, processAyushData } from "@/lib/data-utils"
import styles from "./dashboard.module.css"

export default function DashboardPage() {
  const [ayushData, setAyushData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true)
        const data = await fetchAyushData()
        const processed = processAyushData(data as any[])
        setAyushData(processed)
      } catch (err) {
        setError("Failed to load AYUSH data")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  // Prepare chart data
  const prepareChartData = () => {
    if (!ayushData || !ayushData.rawData) return []

    // Get top schemes by budget
    const topSchemes = [...ayushData.rawData]
      .filter((item) => item.Scheme !== "Grand Total" && item.Type === "Net")
      .sort((a, b) => Number.parseFloat(b["Budget 2017-2018 Total"]) - Number.parseFloat(a["Budget 2017-2018 Total"]))
      .slice(0, 10)

    return topSchemes.map((item) => ({
      name: item.Scheme.length > 20 ? item.Scheme.substring(0, 20) + "..." : item.Scheme,
      budget: Number.parseFloat(item["Budget 2017-2018 Total"]),
      fullName: item.Scheme,
    }))
  }

  const chartData = ayushData ? prepareChartData() : []

  return (
    <div className={styles.dashboardPage}>
      <div className="container">
        <div className={styles.dashboardContainer}>
          <div className={styles.dashboardHeader}>
            <h1 className={styles.dashboardTitle}>AYUSH Budget Dashboard</h1>
            <p className={styles.dashboardSubtitle}>
              Explore budget allocation data for the Ministry of Ayurveda, Yoga & Naturopathy, Unani, Siddha, and
              Homoeopathy
            </p>
          </div>

          {loading ? (
            <div className={styles.loadingContainer}>
              <div className={styles.loader}></div>
              <p>Loading AYUSH data...</p>
            </div>
          ) : error ? (
            <div className={styles.errorContainer}>
              <p className={styles.errorMessage}>{error}</p>
              <button onClick={() => window.location.reload()} className="btn">
                Try Again
              </button>
            </div>
          ) : (
            <div className={styles.dashboardContent}>
              <div className={styles.chartContainer}>
                <h2 className={styles.chartTitle}>Top AYUSH Schemes by Budget Allocation (2017-2018)</h2>
                <div className={styles.chart}>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                      data={chartData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 100,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                      <YAxis
                        label={{
                          value: "Budget (in Crores ₹)",
                          angle: -90,
                          position: "insideLeft",
                          style: { textAnchor: "middle" },
                        }}
                      />
                      <Tooltip
                        formatter={(value, name) => [`₹${value} Cr`, "Budget"]}
                        labelFormatter={(label, payload) => {
                          if (payload && payload.length > 0) {
                            return payload[0].payload.fullName
                          }
                          return label
                        }}
                      />
                      <Legend />
                      <Bar dataKey="budget" fill={styles.barColor || "#5a7d2a"} name="Budget (Crores ₹)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className={styles.statsContainer}>
                <h2 className={styles.statsTitle}>Budget Overview</h2>
                <div className={styles.statsGrid}>
                  {ayushData && (
                    <>
                      <div className={styles.statCard}>
                        <h3>Total AYUSH Budget (2017-2018)</h3>
                        <p className={styles.statValue}>
                          ₹
                          {Number.parseFloat(
                            ayushData.rawData.find((item) => item.Scheme === "Grand Total" && item.Type === "Net")?.[
                              "Budget 2017-2018 Total"
                            ] || "0",
                          ).toFixed(2)}{" "}
                          Cr
                        </p>
                      </div>
                      <div className={styles.statCard}>
                        <h3>Revenue Budget</h3>
                        <p className={styles.statValue}>
                          ₹
                          {Number.parseFloat(
                            ayushData.rawData.find((item) => item.Scheme === "Grand Total" && item.Type === "Net")?.[
                              "Budget 2017-2018 Revenue"
                            ] || "0",
                          ).toFixed(2)}{" "}
                          Cr
                        </p>
                      </div>
                      <div className={styles.statCard}>
                        <h3>Capital Budget</h3>
                        <p className={styles.statValue}>
                          ₹
                          {Number.parseFloat(
                            ayushData.rawData.find((item) => item.Scheme === "Grand Total" && item.Type === "Net")?.[
                              "Budget 2017-2018 Capital"
                            ] || "0",
                          ).toFixed(2)}{" "}
                          Cr
                        </p>
                      </div>
                      <div className={styles.statCard}>
                        <h3>Growth from 2016-2017</h3>
                        <p className={styles.statValue}>
                          {(() => {
                            const current = Number.parseFloat(
                              ayushData.rawData.find((item) => item.Scheme === "Grand Total" && item.Type === "Net")?.[
                                "Budget 2017-2018 Total"
                              ] || "0",
                            )

                            const previous = Number.parseFloat(
                              ayushData.rawData.find((item) => item.Scheme === "Grand Total" && item.Type === "Net")?.[
                                "Revised 2016-2017 Total"
                              ] || "0",
                            )

                            const growth = ((current - previous) / previous) * 100
                            return `${growth.toFixed(2)}%`
                          })()}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className={styles.infoSection}>
                <h2 className={styles.infoTitle}>About AYUSH</h2>
                <p className={styles.infoParagraph}>
                  The Ministry of AYUSH was formed in 2014 to ensure the optimal development and propagation of AYUSH
                  systems of healthcare. AYUSH stands for Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homoeopathy.
                </p>
                <p className={styles.infoParagraph}>
                  The budget data shown here reflects the government's commitment to promoting traditional and
                  alternative medicine systems in India. These systems focus on holistic approaches to health and
                  well-being.
                </p>
                <p className={styles.infoParagraph}>
                  Our AI-powered consultation system leverages this knowledge to provide personalized recommendations
                  based on these traditional healing systems.
                </p>
                <div className={styles.ctaContainer}>
                  <a href="/consultation" className="btn">
                    Try AI Consultation
                  </a>
                  <a
                    href="https://ayush.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Visit Official AYUSH Website
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

