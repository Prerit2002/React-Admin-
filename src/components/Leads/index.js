import React, {useState} from 'react'
import Lead from '../Lead'
import {userdata} from '../../Data'

export default function Leads() {
    const [data,setData] = useState(userdata)
    return (
        <div>
            {data.map((user,key) =>{
                return(
                    <>
                    <Lead 
                    name={user.name}
                    salary={user.salary}
                    email={user.email}
                    id={user.id}
                    deals={user.deals}
                    gender={user.gender}

                    
                    />
                    </>
                )
            })}
            
        </div>
    )
}
