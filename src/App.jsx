import Hero from "./components/Hero"
import HeadlineCards from "./components/HeadlineCards"
import Navbar from "./components/Navbar"
import Food from "./components/Food"
import Category
 from "./components/Category"
import React from "react"
import Footer from "./components/Footer.jsx"



function App() {
    return(
        <>
        <Navbar />
        <Hero />
        <HeadlineCards></HeadlineCards>
        <Food></Food>
        <Category></Category>
        <Footer></Footer>

        </>
    )
  
}

export default App
