import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

function Commision(props) {
  const deals = props.deals
  const deal = parseInt(deals)*10
  const salary = deals*parseInt(props.salary)*10000

    return (
      <a href={"/employee/" + props.id}>
        <div className="m-3">
            <div className="md:flex bg-white rounded-xl w-full  p-8 md:p-0">
            <div className="pr-5 p-1 md:p-8 text-center md:text-left space-y-4">
           <blockquote>
     <h3 className="text-lg pr-5 m-1 font-semibold text-gray-500 ">
       Name : {props.name}
     </h3>
    <p className="p-4 ">
      Email : {props.email}
    </p>
    <p className="p-4">
    Salary : {props.salary}

    </p>
    <p className="p-4">
    Deals Closed : {props.deals}

      </p>
      <p className="p-4">
      Commision(%) : {deal}%
      </p>
      <p className="p-4">
      Commision(₹) : {salary}
      </p>
   </blockquote>
           </div>
           
           <div className="w-32 h-32 md:w-64 md:h-auto md:rounded-none rounded-full mx-auto mb-3 p-5"   >
           <PieChart
  data={[
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 50, color: '#6A2135' },
  ]}
/>
<span className="p-5 md:ml-10 mt-2 w-0 md:w-full "  >Salary</span>
</div>
           <div className="w-32 h-32 md:w-64 md:h-auto md:rounded-none rounded-full mb-3 mx-auto p-5"   >
           <PieChart
  data={[
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 50, color: '#6A2135' },
  ]}
/>
<span className="p-0 md:p-5 md:ml-10  w-2 md:w-full" >Deals Closed</span>
           </div>
          
           </div> 

        </div>

        </a>
        

           
           
        
    )
}

export default Commision
