import React from 'react'
import { BsFacebook, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { BsWhatsapp } from 'react-icons/bs';

function Footer() {
    return (
        <div className='bg-gray-800 text-white flex justify-center mt-16'>
            <div >
                <div className='sm:flex text-center  gap-10  mt-3 sm:mt-7'>
                    <p>+92 344-9828233 </p>
                    <p>sanaullahyousafzai01@gmail.com</p>
                </div>
                <div className="flex gap-4 py-7 text-2xl text-[white] justify-center ">
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
                <h1 className=' text-center  border-t border-amber-50 py-5 '>
                    <footer className="text-center text-gray-400 text-sm py-4">
                        <p className="mb-1">&copy; 2025 Your Company. All rights reserved.</p>
                        <p>Developed by Sana-Ullah</p>
                    </footer>
                </h1>

            </div>
        </div>
    )
}

export default Footer
