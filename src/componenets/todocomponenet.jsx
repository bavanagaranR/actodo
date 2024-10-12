import AddTodoForm from "./todoform"
import Todolist from "./todolist"
import { useState } from "react"
function TodoContainer(){

    const [activityArr,setActivityArr] = useState(
        [
            {
                id:1,
                activity:"go for a walk"
            }
            ,
            {
                id:2,
                activity:"have a break fast"
            }
            ,
            {
                id:3,
                activity:"take a shower "
            }
        ]
    )
    return(
        <div>
            <div className="flex gap-5 flex-wrap">
                <AddTodoForm activityArr={activityArr} setActivityArr={setActivityArr}></AddTodoForm>
                <Todolist activityArr={activityArr} setActivityArr={setActivityArr}></Todolist>
      
        
        </div>
        </div>
    )

}
export default TodoContainer