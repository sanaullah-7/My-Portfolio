import React from 'react'
import Navbar from "../Components/Navbar"
import Hero from "../Components/HeoSection"
import About from "../Components/About"
import Skill from "../Components/Skill"

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Skill />
        </div>
    )
}

export default Home
