import React from 'react'

function About() {
    return (
        <div id='about' className='py-24 px-5 xl:px-24 '>
            <div>
                <h1
                    className='font-bold text-3xl  sm:text-4xl text-center   text-white '
                    style={{ textShadow: '0 0 5px #ffffff, 0 8px 10px #000' }}
                >
                    <span className="inline-block border-l-8   rounded bordeg border-black pl-2">
                        About Me
                    </span>
                </h1>
                <p className='mt-6 sm:font-semibold text-md sm:text-2xl leading-relaxed text-justify'>
                    Hello! My name is Sana Ullah, and I am a passionate and dedicated student of
                    <strong> BS Information Technology (BSIT    )</strong> at Agriculture University Of Peshawar,
                    currently enrolled from 2023 to 2027. I specialize in <strong>frontend development</strong>
                    and love crafting engaging, visually appealing web experiences.
                </p>
                <p className='mt-3 sm:font-semibold text-md sm:text-2xl leading-relaxed text-justify'>
                    My core skills include modern frontend technologies such as
                    <strong> HTML, CSS, JavaScript, React, Tailwind CSS, and Bootstrap</strong>.
                    Beyond frontend, I’m also expanding my knowledge in the
                    <strong> MERN stack (MongoDB, Express.js, React, Node.js)</strong>
                    to build full-stack applications and dynamic user experiences.
                </p>
                <p className='mt-3 sm:font-semibold text-md sm:text-2xl leading-relaxed text-justify'>
                    I am driven by continuous learning and innovation, always striving to stay up-to-date with
                    the latest web trends and best practices. My focus is on building
                    <strong> clean, responsive, and interactive web solutions </strong>
                    that deliver real value to users.
                </p>
                <p className='mt-3 sm:font-semibold text-md sm:text-2xl leading-relaxed text-justify'>
                    As I continue to grow as a developer, I aim to contribute to real-world projects,
                    collaborate with talented teams, and create impactful and exceptional digital
                    experiences for clients and users.
                </p>

                {/* Highlighted small div / button-like section */}
                <div className='mt-8 flex flex-wrap gap-3 md:gap-10 justify-center '>
                    <div className='px-4 py-2 border-2 border-[blue] rounded-full text-white font-semibold highlight'>
                        Problem Solver
                    </div>
                    <div className='px-4 py-2 border-2 border-[blue] rounded-full text-white font-semibold highlight'>
                        Creative Thinker
                    </div>
                    <div className='px-4 py-2 border-2 border-[blue] rounded-full text-white font-semibold highlight'>
                        Eager to Learn
                    </div>
                    <div className='px-4 py-2 border-2 border-[blue] rounded-full text-white font-semibold highlight'>
                        Team Player
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
