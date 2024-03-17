import React, { useState, useEffect } from "react";
import { BsChatSquareDots } from "react-icons/bs";
import {
    FaTwitter,
    FaGooglePlusG,
    FaFacebook,
    FaInstagram,
    FaBars,
} from "react-icons/fa";

function Navbar() {
    const [show, setShow] = useState(false);

    return (
        <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80">
            <ul className="hidden sm:flex px-4">
                <li>
                    {" "}
                    <a href="">Home</a>
                </li>
                <li>
                    {" "}
                    <a href="#gallery">Gallery</a>
                </li>
                <li>
                    {" "}
                    <a href="#deals">Deals</a>
                </li>
                <li>
                    {" "}
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div className="flex justify-between items-center">
                <FaTwitter className="mx-4" />
                <FaFacebook className="mx-4" />
                <FaInstagram className="mx-4" />
                <FaGooglePlusG className="mx-4" />
            </div>

            {/* Hamburger Icon */}
            <div onClick={()=>{setShow(!show)}} className="sm:hidden z-10">
                <FaBars size={20} className="mr-4 cursor-pointer" />
            </div>

            {/* Mobile Menu */}
            <div className={show ? "overflow-y-hidden sm:hidden ease-in duration-300 absolute left-0 top-0 h-screen text-gray-300 bg-black/90 px-4 py-7 flex flex-col w-full" : "absolute top-0 h-screen left-[-100%] ease-out duration-300"}>
                <ul className="h-full w-full text-center pt-12">
                    <li className="text-2xl py-8">
                        {" "}
                        <a href="">Home</a>
                    </li>
                    <li className="text-2xl py-8">
                        {" "}
                        <a href="#gallery">Gallery</a>
                    </li>
                    <li className="text-2xl py-8">
                        {" "}
                        <a href="#deals">Deals</a>
                    </li>
                    <li className="text-2xl py-8">
                        {" "}
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
