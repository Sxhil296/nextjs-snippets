import Link from 'next/link';
import React, { useState } from 'react'
import Image from 'next/image';
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const links = [
        {
          id: 1,
          link: "home",
        },
        {
          id: 2,
          link: "about",
        },
        {
          id: 3,
          link: "portfolio",
        },
        {
          id: 4,
          link: "experience",
        },
        {
          id: 5,
          link: "contact",
        },
      ];
  return (
    <div>
        <nav className='max-w-[1140px] mx-auto bg-black fixed top-0 left-0 right-0 z-10'>
            <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
                <div className="flex items-center justify-between py-3 md:py-5 md:block" >
                    <Link href='/'>
                        <Image src='/bbulogo.svg' width={30} height={30} alt="logo"/>
                    </Link>

                    {/* for mobile */}

                    <div className="md:hidden">
                        <button className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border' onClick={() => setNavbar(!navbar)}>
                            {navbar ? (
                                <FaTimes size={20} />
                            ) : (
                                <FaBars size={20} className="focus:border-none active:border-none"/>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'pb-12 md:p-0 block' : 'hidden'}`}>
                                <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                                    {links.map(({id, link}) => (
                                        <li key={id} className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                                            <Link href={link} smooth duration={500} onClick={() => setNavbar(!navbar)}>{link}</Link>
                                        </li>
                                    ))

                                    }

                                </ul>
            </div>

        </nav>
    </div>
  )
}

export default Navbar