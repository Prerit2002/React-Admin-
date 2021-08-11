import React from 'react'
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
export default function Info() {
    return (
        <div className="md:flex md:flex-wrap ">
            <div className="md:flex  md:flex-wrap p-5  space-between items-centre w-full  h-1/2 justify-between">
            <div className="md:flex-1 m-2 rounded-lg p-5 cursor-pointer mr-10 bg-gradient-to-r from-blue-600 to-blue-400" >
                <span className="text-4xl ">Profit</span>
            <div className="flex m-10 items-centre" >
            <span className="text-2xl font-semibold">$2,415</span>
                <span className="flex  items-centre ml-5">
            -11.4 <ArrowUpward  className="ml-5 text-lg"/>
          </span>
         
            </div>
            <span className="text-base">As compared to last year</span>
            </div>
            <div className="md:flex-1 m-2 rounded-lg p-5 cursor-pointer mr-10   bg-gradient-to-r from-green-500  to-green-200" >
            <span className="text-4xl ">Loss</span>
            <div className="flex m-10 items-centre" >
            <span className="text-2xl font-semibold">$0</span>
                <span className="flex items-centre ml-5">
            -11.4 <ArrowDownward  className="ml-5 text-lg"/>
          </span>
         
            </div>
            <span className="text-base">As compared to last year</span>
            </div>
            <div className="md:flex-1 m-2 rounded-lg p-5 cursor-pointer mr-10  border-black bg-gradient-to-r from-yellow-500  to-yellow-200" >
            <span className="text-4xl ">Total</span>
            <div className="flex m-10 items-centre" >
            <span className="text-2xl font-semibold">$2,415</span>
                <span className="flex items-centre ml-5">
            -11.4 <ArrowUpward  className="ml-5 text-lg"/>
          </span>
         
            </div>
            <span className="text-base">As compared to last year</span>
            </div>
           
            
        </div>

        </div>
        
    )
}
