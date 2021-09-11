import React, { useState, useEffect } from "react"
import Loading from "./Loading"
import Tours from "./Tours"
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project"
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  useEffect(() => {
    console.log("I have started! Fetching data now...")
    fetch(url)
      .then((res) => {
        const { status } = res
        if (status >= 200 && status <= 299) {
          setIsLoading(false)
          return res.json()
        }
        throw new Error(status)
      })
      .then((tours) => {
        setTours(tours)
      })
      .catch((err) => console.log(err))
  }, [])

  console.log(tours)

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    )
  } else {
    return <Tours />
  }
}

export default App
