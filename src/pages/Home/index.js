import React from "react"
import logo1 from "../../pages/images/logo1.png"

function Home(){
    return(
        <div>
         <h1 className="text-5xl text-center underline">FlowChart</h1>
        
        <div className="flex h-screen items-center justify-center h-85">
        <img src={logo1} alt="logo1"/>
        </div>
        </div>
    )
}
export default Home;