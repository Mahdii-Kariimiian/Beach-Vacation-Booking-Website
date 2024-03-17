import React from "react";

function Booking() {
    return <div>
        <div id="deals" className="max-w-[1140px] m-auto w-full p-4 ">
            <form className="lg:flex gap-2 lg:justify-between w-full items-center justify-center">
                <div className="flex flex-col my-2 py-2">
                    <label>Destination</label>
                    <select className="lg:w-[300px] md:w-full border rounded-md p-2">
                        <option>Maldives</option>
                        <option>Key West</option>
                        <option>Kish</option>
                        <option>Qeshm</option>
                        <option>Grande Antigua</option>
                    </select>
                </div>
                <div className="flex w-full">
                    <div className="flex flex-col w-full lg:max-w-[250px]my-2 py-2">
                        <label>Check-in</label>
                        <input className="border rounded-md p-2" type="date" />
                    </div>
                </div>
                <div  className="flex w-full">
                    <div className="flex flex-col w-full lg:max-w-[250px]my-2 py-2">
                        <label>Check-out</label>
                        <input className="border rounded-md p-2" type="date" />
                    </div>
                </div>
                <div>
                    <div className="flex flex-col my-2 py-2 w-full">
                        <label>Search</label>
                        <input className="border rounded-md p-2" type="text" />
                    </div>
                </div>
                <button className="w-full text-sm">Check Availabilities</button>
            </form>
        </div>
    </div>;
}

export default Booking;
