import React from 'react'

export default function Settings() {
    return (
        <div>
            <div className="p-5 items centre container">
                <h1 className="text-semibold p-2 text-4xl">Admin Settings</h1>
                    <div className="p-3">
                        <label className="p-3 m-2">Name </label><br />
                        <input className="p-3 m-2 w-1/2 rounded-lg"   type="text"  />
                    </div>
                    <div className="p-3">
                        <label className="p-3 m-2">Email</label><br />
                        <input className="p-3 m-2 w-1/2 rounded-lg"  type="email"  />
                    </div>
                    <div className="p-3">
                        <label className="p-3 m-2">Password</label><br />
                        <input className="p-3 m-2 w-1/2 rounded-lg" type="salary"  />
                    </div>
                    <div className="p-3">
                        <label className="p-3 m-2">Retype Password</label><br />
                        <input className="p-3 m-2 w-1/2 rounded-lg"  type="text"  />
                    </div>
                    <div className="w-full p-4 items-center ">
                        <button className=" bg-blue-500 w-1/2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Update</button>
                    </div>

               </div>
            
        </div>
    )
}
