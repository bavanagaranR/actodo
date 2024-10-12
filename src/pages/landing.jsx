import Header from "../componenets/header";
import Card from "../componenets/card";
import TodoContainer from "../componenets/todocomponenet";

import { useLocation } from "react-router-dom";

function Landing(){
    const data = useLocation()
    return(
        <div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
          {/* header */}
        <Header name={data.state.user}></Header>
        {/* card */}
        <div className="flex justify-between gap-7 my-5 flex-wrap">
         
        <Card bgcolor={"#8272DA"} title={"23"} subtitle={"chennai"}></Card>
        <Card bgcolor={"#FD6663"} title={"December"} subtitle={"16.01.21"}></Card>
        <Card bgcolor={"#FCA201"} title={"Built using"} subtitle={"React"}></Card>
         
         </div>
         {/* todo container */}
         <TodoContainer></TodoContainer>
    
       
       
        </div>
       </div>
    )

}
export default Landing