import Hero from "./components/Hero"
import HeadlineCards from "./components/HeadlineCards"
import Navbar from "./components/Navbar"
import Food from "./components/Food"
import React from "react"


function App() {
    return(
        <>
        <Navbar />
        <Hero />
        <HeadlineCards></HeadlineCards>
        <Food></Food>
        </>
    )
  
}

export default App
