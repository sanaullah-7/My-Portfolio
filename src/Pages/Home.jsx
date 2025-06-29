import React from 'react'
import Navbar from "../Components/Navbar"
import Hero from "../Components/HeoSection"
import About from "../Components/About"
import Skill from "../Components/Skill"
import Project from '../Components/Project'
import Contact from '../Components/Contact'
import Footer from "../Components/Footer"

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Skill />
            <Project />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
