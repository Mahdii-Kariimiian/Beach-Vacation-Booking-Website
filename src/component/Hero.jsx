import React from "react";

function Hero() {
    return (
        <div className="w-full h-[85vh]">
            <img className=" h-full w-full object-cover bg-center" src="/pexels-beach.jpeg" alt="beach" />
            <div className="max-w-[1140px] m-auto">
                <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-gray-900 p-4">
                    <h1 className="font-bold text-4xl">Find your special trip</h1>
                    <h2 className="text-xl py-4 italic">With WEEKAWAY</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, vitae?</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
