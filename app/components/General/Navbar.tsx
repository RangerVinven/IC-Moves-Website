import React from 'react'

export default function Navbar() {
    return (
        <div className="w-full bg-gray-200 p-2 flex">
            <div className="w-full ml-10">
                img
            </div>

            <div className="flex justify-evenly align-middle w-1/2">
                <div>
                    Home
                </div>

                <div>
                    Properties
                </div>
                
                <div>
                    Contact Us
                </div>
            </div>
        </div>
    )
}
