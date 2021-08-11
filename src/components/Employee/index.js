import React, {useState} from 'react'
import {userdata } from '../../Data'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
export default function Employee(props) {

    return (
            <a href={"/employee/" + props.id}>
                 <div className="bg-white hover:bg-grey-200 hover:bg-opacity-30 m-2 my-2 shadow-2xl shadow-inner rounded-xl p-2 h-full w-auto  cursor-pointer  ">
            <img className="w-32 h-32 rounded-full mx-auto" alt="phatu" src="https://www.popsci.com/uploads/2020/01/07/WMD5M52LJFBEBIHNEEABHVB6LA.jpg"    />
            <div className="pt-6 md:pl-10 space-y-4 items-centre  justify-centre">
                <h3 className="text-xl">Name : <strong> {props.name}</strong> </h3>
                <h5>Email: <strong>{props.email}</strong> </h5>
                <h5>Salary :<strong>  {props.salary}</strong></h5>

            </div>


        </div>

            </a>
           
        
        
        
        

       
        
    )
}
