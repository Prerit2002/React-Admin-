import React from 'react'

const Navbar = () => {
    return (
        
        <div className="flex  flex-wrap items-centre justify-between bg-gray-900 p-6 " >
            <div className="  items-centre  flex-grow md:flex-grow-0 text-white mr-6">
                <span className="text-xl font-bold">
                    GOFIDGET
                </span>
           
            </div>
            <div >
                <button className="inline-block   text-white  ">
                    User
                </button>
            </div>

            
        </div>
    )
}

export default Navbar
