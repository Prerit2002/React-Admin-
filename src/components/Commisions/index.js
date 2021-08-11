import React , {useState}from 'react'
import {userdata} from '../../Data'
import Commision from '../Commision'

const Commisions = () => {
    const [data,setData] = useState(userdata)
    return (
        <div className="p-5">
            {data.map((user,key) => {
                return(
                    <>
                    <Commision 
                    name={user.name}
                    salary={user.salary}
                    email={user.email}
                    id={user.id}
                    deals={user.deals}

                    />
                    </>
                )
            })}


            
        </div>
    )
}

export default Commisions
