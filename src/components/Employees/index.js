import React, {useState} from 'react'
import Employee from '../Employee'
import {userdata} from "../../Data"
const search1 = {}
export default function Employees(props) {
    const [data, setData] = useState(userdata)
    const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(value)
    window.open('/employees/'+value,"_self" );
  };
    console.log(data)
    return (
        <div>
           <form className="flex justify-end form-horizontal p-3 " type="submit">
               
           <input
                  type="search"
                  id="search"
                  className="p-2 rounded-lg m-2"
                  placeholder="Search Employee"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  ref={(input) => { search1.search= input }}
                  onChange={handleChange}    
                /> 

                    <button className="p-2 m-2"  onClick={handleSubmit} type="submit">
                      Submit
                    </button>
               
           </form>
             <div className="container grid  md:grid-cols-3 gap-4 p-10 "  >
            {data.map((employee,key) => {
                return(
                    <div key={key} >
                        {console.log(employee.name.split(" ")[0])}
                    <Employee 
                    name={employee.name}
                    salary={employee.salary}
                    email={employee.email}
                    id={employee.id}
                    
                    />

                    </div>

                )
               
            })}

            
        </div>

        </div>
       
    )
}
