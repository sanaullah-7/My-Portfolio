
import HTML from "../assets/tech_logo/html.png"
import CSS from "../assets/tech_logo/css.png"
import Bootstrap from "../assets/tech_logo/bootstrap.png"
import Tailwind from "../assets/tech_logo/tailwindcss.png"
import JavaScript from "../assets/tech_logo/javascript.png"
import React from "../assets/tech_logo/reactjs.png"
import Nextjs from "../assets/tech_logo/nextjs.png"
import Noodejs from "../assets/tech_logo/nodejs.png"
import Python from "../assets/tech_logo/python.png"
import Express from "../assets/tech_logo/express.png"
import MongoDb from "../assets/tech_logo/mongodb.png"
import Postman from "../assets/tech_logo/postman.png"
import Figma from "../assets/tech_logo/figma.png"
import Git from "../assets/tech_logo/git.png"
import GitHub from "../assets/tech_logo/github.png"
import Vercel from "../assets/tech_logo/vercel.png"
import Netlify from "../assets/tech_logo/netlify.png"
import Vscode from "../assets/tech_logo/vscode.png"

const logos = [
    {
        logo: HTML,
        name: "HTML   ",
    },
    {
        logo: CSS,
        name: "CSS    ",
    },
    {
        logo: Bootstrap,
        name: "Bootstrap",
    },
    {
        logo: Tailwind,
        name: "Tailwind CSS",
    },
    {
        logo: JavaScript,
        name: "JavaScript",
    },
    {
        logo: React,
        name: "React  ",
    },
    {
        logo: Nextjs,
        name: "Next JS ",
    },
    {
        logo: Noodejs,
        name: "Noode JS",
    },
    {
        logo: Python,
        name: "Python ",
    },
    {
        logo: Express,
        name: "Express",
    },
    {
        logo: MongoDb,
        name: "Mongo DB",
    },
    {
        logo: Postman,
        name: "Postman",
    },
    {
        logo: Figma,
        name: "Figma  ",
    },
    {
        logo: Git,
        name: "Git ",
    },
    {
        logo: GitHub,
        name: "GitHub ",
    },
    {
        logo: Vercel,
        name: "Vercel ",
    },
    {
        logo: Netlify,
        name: "Netlify",
    },
    {
        logo: Vscode,
        name: "Vscode ",
    },
]

function Skill() {
    return (
        <div className="mt-36">
            <h1 className='font-bold text-3xl sm:text-4xl text-center   text-white ' style={{ textShadow: '0 0 5px #ffffff, 0 8px 10px #000' }}>
                <span className="inline-block border-l-8  rounded bordeg border-black pl-3 mr-5">Skills</span>
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 items-center place-items-center mt-16">
                {logos.map((item) => (
                    <div className="flex p-2 sm:p-5 ">
                        <div className="logo border-2 border-black-800 p-3  sm:p-5 rounded-xl flex flex-col gap-y-5 ">
                            <img className=" h-20 w-20" src={item.logo} alt={item.name} />
                            <h1 className="text-center font-bold xl:font-extrabold">{item.name}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skill
