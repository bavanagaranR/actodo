
import {useState} from "react";
import Todoitem from "./todoitem";
function Todolist(props){


    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr
    return(
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow"> 
            <h1 className="text-2xl font-medium">Todays Activity</h1>
            {activityArr.length===0?<p>you haven't add anything yet!</p>:""}
            {
            activityArr.map(function(item,index)
        {
            return <Todoitem activity={item.activity} id={item.id} index={index} activityArr={activityArr} setActivityArr={setActivityArr}></Todoitem>
        })
}
        </div>
    )

}
export default Todolist