import React from 'react';
import image from '../assets/image.png';
import { BsFacebook, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { BsWhatsapp } from 'react-icons/bs';
import { TypeAnimation } from 'react-type-animation';

function HeoSection() {
    return (
        <div className="flex flex-col-reverse sm:flex-row  justify-between  sm:px-5  xl:px-24 pt-20 items-center">
            <div className="font-bold flex flex-col gap-y-5 sm:items-start items-center text-center sm:text-left">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-0 " >
                    Hey, I am <br />
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white" style={{ textShadow: '0 0 5px #ffffff, 0 8px 10px #000' }}>Sana Ullah</span>
                </h1>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
                    I'm a
                    <span className="md:font-extrabold text-[#ffffff] "

                        style={{ textShadow: '0 0 50px #ffffff, 0 0 40px #000', letterSpacing: '0.05em' }}>
                        <TypeAnimation
                            sequence={[' Frontend Developer', 2000, ' MERN Stack Developer', 2000]}
                            wrapper="span"
                            repeat={Infinity}
                        />
                    </span>
                </h1>
                <p className="text-xl sm:text-2xl sm:max-w-lg  mt-4 mx-5 sm:mx-0 text-black ">
                    “ Building Modern, Responsive Web Applications. ”
                    <br />
                    " Transforming ideas into interactive masterpieces that empower entrepreneurs and solve real-world problems. "
                </p>
                <div className="mt-4">
                    <h1 className="text-lg font-bold">Available On</h1>
                    <div className="flex gap-4 mt-2 text-2xl text-[white]">
                        <a href="https://www.facebook.com/share/1Bm52igzjS/?mibextid=qi2Omg" target='_blank' > {/*blank=>  It tells the browser to open the link in a new tab or window. */}
                            <BsFacebook />
                        </a>
                        <a href="https://www.instagram.com/kaahn.1/" target='_blank'>
                            <BsInstagram />
                        </a>
                        <a href="https://github.com/sanaullah-7" target='_blank'>
                            <BsGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/sana-ullah-072016331/" target='_blank'>
                            <BsLinkedin />
                        </a>
                        <a href="mailto:sanaullahyousaf01@gmail.com" target='_blank'>
                            <TfiEmail />
                        </a>
                        <a href="https://wa.me/03449828233" target='_blank'>
                            <BsWhatsapp />
                        </a>
                    </div>
                </div>
            </div>

            <div className="pt-10 sm:pt-0 sm:mb-52 lg:mb-40  flex justify-center">
                <img
                    src={image}
                    alt="Profile"
                    className="w-52 sm:w-72 md:w-72 lg:w-80  rounded-full shadow-2xl shadow-[#afafee]"
                />
            </div>
        </div>
    );
}

export default HeoSection;
