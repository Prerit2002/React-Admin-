import React,{useState , useEffect} from 'react'
import Dropdowns from '../Sidebar/dropdown'

export default function Mobbutton() {
    const shouldBeOpen = () => window.innerWidth > 767

    const [isNavOpen, setIsNavOpen] = useState(shouldBeOpen);

    
    useEffect(() => {
        window.addEventListener("resize", () => {
          setIsNavOpen(shouldBeOpen());
        });
      }, []);
      
    
     
    return(
        <div>
        {isNavOpen === false?
        <>
            <Dropdowns />
        </>:
        null
        }
        </div>
    )
    
}

