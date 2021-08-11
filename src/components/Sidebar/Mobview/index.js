import React,{useState , useEffect} from 'react'
import Sidebar from '../index'
import Dropdowns from '../dropdown/index'
export default function Mobview() {
    const shouldBeOpen = () => window.innerWidth > 767

    const [isNavOpen, setIsNavOpen] = useState(shouldBeOpen);

    
    useEffect(() => {
        window.addEventListener("resize", () => {
          setIsNavOpen(shouldBeOpen());
        });
      }, []);
      
    
     
    return(
        <div className="bg-gray-900 ">
        {isNavOpen === true?
        <>
            <Sidebar />
        </>:
        null
        }
        </div>
    )
    
}

