import React from "react";

function Activities() {
    return (
        <div className="max-w-[1140px] m-auto w-full sm:flex mt-[-100px]">
            <div className="sm:w-[33.33%]  relative p-4 ">
                <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-white text-2xl">Resorts</h3>

                <img className="h-[250px] relative shadow-lgh-[200px] w-full object-cover border-4" src="/pexels-resorts.webp" alt="" />
            </div>

            <div className="sm:w-[33.33%]  relative p-4 ">
                <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-white text-2xl">Cruises</h3>

                <img className="h-[250px] relative shadow-lgh-[200px] w-full object-cover border-4" src="/pexels-cruises.jpeg" alt="" />
            </div>

            <div className="sm:w-[33.33%]  relative p-4 ">
                <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-white text-2xl">Excursions</h3>

                <img className="h-[250px] relative shadow-lg w-full object-cover border-4" src="/pexels-excursions.jpeg" alt="" />
            </div>
        </div>
    );
}

export default Activities;
