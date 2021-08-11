import React, {useState}from 'react'
import {userdata} from '../../Data'
import Employee from '../Employee'

const Search = () => {
    const [data , setData] = useState(userdata)
    const id = window.location.pathname.split("/");
    const name= id[2]

    return (
        <div className="container grid  md:grid-cols-3 gap-4 p-1" >
            {data.map((user,key) => {
                return(
                    <>
                    {user.name.split(" ")[0]  === name ?
                <>
                <Employee
                name={user.name}
                email={user.email}
                salary={user.salary}
                
                />
                </>
                :null}
                </>
                )
                
            })}
            
        </div>
    )
}

export default Search
