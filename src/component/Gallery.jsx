import React from "react";

function Gallery() {
    return (
        <div id="gallery" className="max-w-[1140px] m-auto w-full p-4 py-16">
            <h2 className="text-center text-gray-700 p-4">Gallery</h2>
            <div className="grid sm:grid-cols-5 gap-4">
                <div className="sm:col-span-3 col-span-2 row-span-2">
                    <img
                        className="w-full h-full object-cover"
                        src="/Gallery4.jpeg"
                        alt="Gallery Photo"
                    />
                </div>
                <div>
                    <img
                        className="w-full h-full object-cover"
                        src="/Gallery6.jpeg"
                        alt="Gallery Photo"
                    />
                </div>
                <div>
                    <img
                        className="w-full h-full object-cover"
                        src="/Gallery7.jpeg"
                        alt="Gallery Photo"
                    />
                </div>
                <div>
                    <img
                        className="w-full h-full object-cover"
                        src="/Gallery9.jpeg"
                        alt="Gallery Photo"
                    />
                </div>
                <div>
                    <img
                        className="w-full h-full object-cover"
                        src="/Gallery10.jpeg"
                        alt="Gallery Photo"
                    />
                </div>
            </div>
        </div>
    );
}

export default Gallery;
