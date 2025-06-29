import React from 'react'
import image from "../assets/project/image.png"
import image2 from "../assets/project/Screenshot (25).png"
import image3 from "../assets/project/Screenshot (26).png"
import image4 from "../assets/project/Screenshot (27).png"
import image5 from "../assets/project/Screenshot (28).png"
import image6 from "../assets/project/Screenshot (29).png"
import image7 from "../assets/project/Screenshot (30).png"
import image8 from "../assets/project/Screenshot (31).png"
import image9 from "../assets/project/Screenshot (32).png"
import image10 from "../assets/project/Screenshot (33).png"
import image11 from "../assets/project/Screenshot (34).png"
import image12 from "../assets/project/Screenshot (36).png"

//import image12 from "../assets/project/Screenshot (35).png"



const Projects = [
    {
        image: image11,
        name: "E-commerce Shop",
        description: "“This is my ‘E-commerce Shop’, which I built using React.js and the Tailwind CSS framework.”",
        Github: "https://github.com/sanaullah-7/E-commerce-Project",
        Live: "https://e-commerce-project-henna-iota.vercel.app/"

    },
    {
        image: image12,
        name: "Recipes Project",
        description: "“This is my ‘Recipes Project’, which I built using React.js and the Tailwind CSS framework.”  ",
        Github: "https://github.com/sanaullah-7/My-First-Responsive-Project",
        Live: ""

    },
    {
        image: image8,
        name: "Form Validation",
        description: "This is my ''Form Validation Project'' that i build using HTML,CSS and JavaScript and also that will be store into a localStorage",
        Github: "https://github.com/sanaullah-7/Form-Validation",
        Live: "https://form-validation-withlocalstorage.vercel.app/"

    },
    {
        image: image2,
        name: "Weather App",
        description: "This is my ''Weather App Mini Project'' that i build using HTML,CSS and JavaScript",
        Github: "https://github.com/sanaullah-7/Weather-App/tree/main",
        Live: "https://weather-app-iota-jet.vercel.app/"

    },
    {
        image: image10,
        name: "Currency Converter",
        description: "“This is my ‘Currency Converter’ app that I built using HTML, CSS, and JavaScript. It uses an API to fetch data from a database.",
        Github: "https://github.com/sanaullah-7/Currency_Converter",
        Live: "https://sanaullahtechcom.vercel.app/"

    },
    {
        image: image7,
        name: "Popular Movies (TMBD)",
        description: "“This is my ‘Popular Movies (TMBD)’ app that I built using HTML, CSS, and JavaScript. It uses an API to fetch data from a database.",
        Github: "https://github.com/sanaullah-7/Movies-Fetching/tree/main",
        Live: "https://sanaullah-7.github.io/Movies-Fetching/"

    },
    {
        image: image9,
        name: "User Find",
        description: "“This is my ‘User Find’ app that I built using HTML, CSS, and JavaScript. It uses an API to fetch data from a database.",
        Github: "https://github.com/sanaullah-7/UserFind",
        Live: "https://sanaullah-7.github.io/UserFind/"

    },
    {
        image: image6,
        name: "Calculator",
        description: "This is my ''Calculator'' mini project that i build using HTML,CSS and JavaScript",
        Github: "https://github.com/sanaullah-7/Calculator",
        Live: "https://sanaullah-7.github.io/Calculator/"

    },
    {
        image: image3,
        name: "Temperature Converter ",
        description: "This is my ''Temperature Converter Project''  that i build using HTML,CSS and JavaScript",
        Github: "https://github.com/sanaullah-7/temprtature-converter",
        Live: "https://sanaullah-7.github.io/temprtature-converter/"

    },
    {
        image: image,
        name: "Tic-Tac Toe",
        description: "This is my ''Tic-Tac Toe'' game that i build using HTML,CSS and JavaScript",
        Github: "https://github.com/sanaullah-7/Digital_Tic-Tac",
        Live: "https://digital-tic-tac.vercel.app/"

    },
    {
        image: image5,
        name: "To Do List",
        description: "This is my ''To Do List'' that i build using HTML,CSS and JavaScript",
        Github: "https://github.com/sanaullah-7/To-DO-List",
        Live: "https://to-do-list-theta-orpin-10.vercel.app/"

    },
    {
        image: image4,
        name: "Registration Form",
        description: "This is my ''Registration Form''  that i build using HTML,CSS and JavaScript",
        Github: "https://github.com/sanaullah-7/Registration-Form",
        Live: "https://registration-form-mu-eight.vercel.app/"

    },
]

function Project() {
    return (
        <div id='project' className='flex flex-col items-center py-20 '>
            <h1 className='font-bold text-3xl sm:text-4xl text-center   text-white ' style={{ textShadow: '0 0 5px #ffffff, 0 8px 10px #000' }}>
                <span className="inline-block border-l-8  rounded bordeg border-black pl-3 mr-5">My Projects</span>
            </h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 place-items-center items-center w-full gap-y-20 mt-20'>
                {Projects.map((item) => (
                    <div className='flex flex-col items-center place-items-center bg-white w-[300px] sm:w-[350px] p-4 rounded-xl'>
                        <div>
                            <img className='sm:h-[300px] sm:w-[300px] rounded-sm ' src={item.image} alt="" />
                        </div>
                        <h1 className='text-xl font-extrabold' >{item.name}</h1>

                        <p className='w-9/10 font-semibold'>{item.description}</p>
                        <div className='flex mt-3 gap-20'>
                            <button className='bg-[green] sm:font-bold p-1 sm:p-2 rounded-xl text-white'> <a href={item.Github} target='_blank'>Source Code</a></button>
                            <button className='bg-[blue] sm:font-bold p-1 sm:p-2 rounded-xl  text-white'><a href={item.Live} target='_blank'>Live Code</a></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project
