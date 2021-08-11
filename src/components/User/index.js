import React, {useState} from 'react'
import {userdata} from '../../Data'
import { PieChart } from 'react-minimal-pie-chart';
function User(props) {
    console.log(userdata)
    const [data , setData] = useState(userdata)
    const id = window.location.pathname.split("/");
   
    const user = data[id[2]-1]
    
    return (
       <div className="container">
           
           <div className="flex md:flex-row flex-col flex-shrink justify-between ">
               <div className="p-5 items centre container">
                    <div className="p-3">
                        <label className="p-3 m-2">Name </label><br />
                        <input className="p-3 m-2 w-full rounded-lg"  value={user.name} placeholder={user.name} type="text"  />
                    </div>
                    <div className="p-3">
                        <label className="p-3 m-2">Email</label><br />
                        <input className="p-3 m-2 w-full rounded-lg" value={user.email} placeholder={user.email} type="email"  />
                    </div>
                    <div className="p-3">
                        <label className="p-3 m-2">Salary</label><br />
                        <input className="p-3 m-2 w-full rounded-lg" value={user.salary} placeholder={user.salary} type="salary"  />
                    </div>
                    <div className="p-3">
                        <label className="p-3 m-2">Deals Closed</label><br />
                        <input className="p-3 m-2 w-full rounded-lg" value={user.deals} placeholder={user.deals} type="text"  />
                    </div>
                    <div className="w-full p-4 items-center ">
                        <button className=" bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Update</button>
                    </div>

               </div>
               <div className="flex flex-col md:flex-row rounded-xl  pt-4 m-5 rounded-2">
               <div className="p-2 m-2  flex  flex-col ">
               {/* <PieChart
  data={[
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 50, color: '#6A2135' },
  ]}
/>
<PieChart
  data={[
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 50, color: '#6A2135' },
  ]}
/> */}
            <div className="flex-1  rounded-lg  w-full h-1/2 cursor-pointer m-1 mb-3 bg-gradient-to-r from-blue-500 to-blue-100" >
                <span className="text-2xl p-3 ">Deals Closed</span>
                <div className="flex m-10 items-centre" >
                    <span className="text-2xl p-5 ml-2 font-semibold">3</span>
                    {/* <span className="flex items-centre ml-5">
                    -11.4 
                    </span> */}
         
                </div>
            </div>
            <div className="flex-1 rounded-lg  w-full h-1/2 cursor-pointer m-1 mt-3 bg-gradient-to-r from-blue-400 to-yellow-100" >
                <span className="text-2xl p-2">Attendance</span>
                <div className="flex m-10 items-centre" >
                    <span className="text-2xl p-3 font-semibold">93%</span>
                    {/* <span className="flex items-centre ml-5">
                        -11.4 
                    </span> */}
         
                </div>
            </div>
{/* <div className="bg-black">Hello</div>
<div className="bg-grey-500">Hello</div> */}
            </div>
    <div className="p-2 m-2  flex flex-shrink flex-col">
    <div className="flex-1  rounded-lg  w-5/6 h-1/2 cursor-pointer m-1 mb-3 bg-gradient-to-r from-blue-500 to-blue-100" >
                <span className="text-2xl font-semibol  p-5">Avg Commision</span>
                <div className="flex m-10 items-centre" >
                    <span className="text-2xl  font-semibold">25%</span>
                    {/* <span className="flex items-centre ml-5">
                    -11.4 
                    </span> */}
         
                </div>
            </div>
            <div className="flex-1 rounded-lg  w-5/6 h-1/2 cursor-pointer m-1 mt-3 bg-gradient-to-r from-blue-400 to-yellow-100" >
                <span className="text-2xl p-2">Salary</span>
                <div className="flex m-10 items-centre" >
                    <span className="text-2xl  font-semibold">1000000</span>
                    {/* <span className="flex items-centre ml-5">
                        -11.4 
                    </span> */}
         
                </div>
            </div>
               </div>

               </div>
               

           </div>

       </div>
    )
}

export default User
