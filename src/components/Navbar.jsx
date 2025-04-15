import React, { useState } from "react";
//import Logo from '../assets/new-logo.webp';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed top-0 left-0 w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50 shadow-md">
            <div>
                {/* <img src={Logo} alt="logo-image" style={{ width: '50px' }}></img> */}
            </div>

            <ul className="hidden md:flex">
                <li className="px-4 py-2 hover:bg-pink-600 hover:text-white rounded-md transition duration-300"><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li className="px-4 py-2 hover:bg-pink-600 hover:text-white rounded-md transition duration-300"><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li className="px-4 py-2 hover:bg-pink-600 hover:text-white rounded-md transition duration-300"><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li className="px-4 py-2 hover:bg-pink-600 hover:text-white rounded-md transition duration-300"><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                <li className="px-4 py-2 hover:bg-pink-600 hover:text-white rounded-md transition duration-300"><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>


            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>

            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/aqsaaslam01/" target="_blank" rel="noopener noreferrer">Linkedin<FaLinkedin size={30} /></a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/AqsaAslam01" target="_blank" rel="noopener noreferrer">GitHub<FaGithub size={30} /></a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#EA4335]">
                        <a className="flex justify-between items-center w-full text-gray-300" href="mailto:aqsaaslam.78@gmail.com">Email<HiOutlineMail size={30} /></a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                        <a className="flex justify-between items-center w-full text-gray-300" href="https://drive.google.com/file/d/1QJy5q9pUBnAvJmxVfyKGk5P5CBM9W4gN/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume<BsFillPersonLinesFill size={30} /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;