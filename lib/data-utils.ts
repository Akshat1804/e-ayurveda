import Papa from "papaparse"

export async function fetchAyushData() {
  try {
    const response = await fetch(
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ministry-of-ayurveda-yoga-and-naturopathy-unani-siddha-and-homoeopathy-ayush-Ktx0VmhkOGDcYP6ZaZgeZ7apiUEpU5.csv",
    )
    const csvText = await response.text()

    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        complete: (results) => {
          resolve(results.data)
        },
        error: (error) => {
          reject(error)
        },
      })
    })
  } catch (error) {
    console.error("Error fetching AYUSH data:", error)
    throw error
  }
}

export function processAyushData(data: any[]) {
  // Filter out rows with missing data
  const filteredData = data.filter((row) => row.Scheme && row.Type && row["Budget 2017-2018 Total"])

  // Group by scheme
  const schemeGroups = filteredData.reduce((acc, row) => {
    if (!acc[row.Scheme]) {
      acc[row.Scheme] = []
    }
    acc[row.Scheme].push(row)
    return acc
  }, {})

  return {
    rawData: filteredData,
    schemeGroups,
  }
}

