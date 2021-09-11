import React, { useState, useEffect } from "react"
import Loading from "./Loading"
import Tours from "./Tours"
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project"
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const remainingTours = tours.filter((tour) => tour.id !== id)
    setTours(remainingTours)
  }

  const fetchTours = async () => {
    setIsLoading(true)
    console.log("I have started! Fetching data now...")
    try {
      const res = await fetch(url)
      const tours = await res.json()
      setIsLoading(false)
      setTours(tours)
    } catch {
      setIsLoading(false)
      setIsError(true)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    )
  } else if (isError) {
    return (
      <>
        <div className="container">
          <h2>An Error has occured!</h2>
          <button onClick={window.location.reload}>Reload the page</button>
        </div>
      </>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <button className="btn" onClick={fetchTours}>
            Reload the Page
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
