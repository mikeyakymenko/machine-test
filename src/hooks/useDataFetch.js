import { useEffect, useState } from 'react'

export const useDataFetch = url => {
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(null)

  const fetchData = async url => {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const json = await response.json()
        setData(json)

        setIsLoading(false)
      }
      // todo empty data handler
    } catch (e) {
      throw new Error(e.message)
      setError(e.message)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    fetchData(url)
  }, [url])

  return { data, isLoading, error }
}
