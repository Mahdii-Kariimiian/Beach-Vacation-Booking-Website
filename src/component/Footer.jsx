import React from "react";
import { BsChatSquareDots } from "react-icons/bs";

function Footer() {
    return (
        <div className="max-w-[1140px] m-auto w-full p-4 py-16">
            <div className=" text-gray-700 flex m-auto justify-center item-center">
                <BsChatSquareDots size={30} className="mr-2" />
                <h1 className="text-xl font-bold text-gray-700">WEEKAWAY</h1>
            </div>
        </div>
    );
}

export default Footer;
