import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Navber = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ]

    return (
        <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full px-4">
            <div className=" w-fit mx-auto flex items-center justify-center gap-20 md:gap-25 lg:gap-30 px-4 md:px-5 lg:px-8 py-3 rounded-[30px] border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <div className="p-2 rounded-full bg-white/20">
                        <FaUser className="text-black text-sm md:text-base" />
                    </div>

                    <h2 className=" text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-black ">
                        Raufur
                    </h2>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center">
                    <div className="flex items-center gap-4 lg:gap-8 text-sm lg:text-base  font-medium  text-black">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.path}
                                className="  relative transition duration-300 hover:text-gray-800 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Contact Button (Desktop) */}
                <div className="hidden md:block">
                    <Link to="/contact">
                        <button className=" px-4 md:px-5 lg:px-6 py-2 text-sm md:text-sm lg:text-base rounded-xl bg-white/20 border border-gray-600 text-black backdrop-blur-md transition duration-300 hover:bg-black hover:text-white hover:scale-105">
                            Contact
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-black text-3xl"
                >
                    {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={` md:hidden overflow-hidden transition-all duration-300  ${menuOpen ? 'max-h-96 mt-3 opacity-100' : 'max-h-0 opacity-0'}  `}
            >
                <div className="   flex flex-col items-center gap-5 py-6 rounded-3xl border border-white/20 bg-[#f4e2baa6] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-800 text-base font-medium px-3 py-2 rounded-lg transition-all duration-300 ease-out hover:bg-black hover:text-white hover:shadow-lg" 
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link to="/contact">
                        <button className=" px-5 py-2 rounded-xl bg-white/20 border border-gray/20 text-black  hover:bg-black hover:text-white text-sm font-medium hover:scale-105 transition">
                            Contact
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navber