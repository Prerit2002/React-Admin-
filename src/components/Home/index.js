import React from 'react'
import Info from '../Info'

export default function Home() {
    return (
        <div className="flex-1">
            <Info />
            <div >
                <h3 className=" font-semibold  text-2xl pl-5">OverView</h3>
                <div className="md:flex md:justify-around md:m-5 md:flex-wrap">
                <img  className=" md:w-1/3 md:h-70 rounded-3xl pl-5 m-3  p-5" alt="graph" src="https://media.istockphoto.com/vectors/financial-analysis-icon-vector-id1169202145?k=6&m=1169202145&s=612x612&w=0&h=FCczSnWboT7TteSh7Z12SCb66qCKCqLScBPK-SBSHRQ="   />
                <img  className="md:w-1/3 md:h-73 rounded-3xl pl-5 m-3 p-5" alt="graph" src="https://www.investopedia.com/thmb/gTgDmEIjG3Vj00mG2QiYOmB20KA=/1096x822/smart/filters:no_upscale()/verticallinechart-d5b90ffda6cc4a268632a0958baf5944.jpg"   />
            

                </div>
                </div>
        </div>
       
    )
}
