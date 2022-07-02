import React from "react"
import Nav from "./components/Nav/Nav"
import "./App.css"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer"
const App = () => {
  return (
    <>
    <Nav />
    <Hero />
    <Services />
    <Contact />
    <Footer />
    </>
  )
}

export default App
