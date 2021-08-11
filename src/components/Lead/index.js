import React, {useState} from 'react'
import { PieChart } from 'react-minimal-pie-chart';

function Lead(props) {
 
  const [percent, setPercentage] = useState(30)
  const [dealsss,setDeals] = useState(props.deals)
  const salary = parseInt(props.salary)*parseInt(dealsss)*10000
  const handleclick = (e) => {
      e.preventDefault();
      const a = parseInt(percent);
      if (a <= 95 && dealsss < 5){
        setPercentage(a+10)
       
          }

          if (a === 100){
            setPercentage(30)
            if (dealsss <= 4){
                setDeals(dealsss+1)

            }
            
    
        
      }
      
     
      console.log(a)
    
  }

    return (
        <div className="m-5 ">
            <div class="md:flex  bg-gray-100 container rounded-xl  md:p-2">
                <div>
                <img class="  w-32 h-full p-3 align-start relative h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" alt="" width="384" height="512" />
                </div>
  
  <div class="pt-6 p-3 md:p-6 text-center flex-shrink  md:text-center space-y-4">
  <div class="md:grid grid-flow-col  text-left grid-rows-7 grid-cols-2   md:grid-cols-6 md:grid-rows-2 gap-4">
  <div>Name : <strong>{props.name}</strong></div>
  <div>Salary :<strong>{salary }</strong> </div>
  {/* <div className="w-1"></div>
  <div className="w-1"></div> */}
  {/* <div className="w-1 align-right"></div>
  <div className="w-1"></div> */}
  <div className="col-span-1 md:col-span-2 md:ml-3">Email  : <strong>{props.email}</strong></div>
  <div className="col-span-1 md:col-span-2 md:ml-3">Gender : <strong>{props.gender}</strong></div>
  
  
  <div className='flex p-2 md:mt-3  h-1.5 p-0.5 w-full bg-gray-200'>
  
  <div className='h-1  w-full bg-gray-300'>
            
            <div
                style={{ width: `${percent}%`}}
                className={`h-full ${
                    percent < 70 ? 'bg-red-600' : 'bg-green-600'}`}>
            </div>
        </div>
     

     
           
            
    </div>
        <div>
            Deals Closed : <strong>{dealsss}</strong> 
        </div>
        <div >
        <button className="md:m-2 m-1 p-1   bg-blue-500 hover:bg-blue-700 text-xs text-white font-bold md:p-1 rounded" onClick={handleclick}>Update Progress({percent}%)</button>
 
        </div>
        <div></div>
       
  
</div>
   
  </div>
</div>
            

        </div>
        

           
           
        
    )
}

export default Lead
