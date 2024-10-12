// import Header from "./componenets/header";
// import Card from "./componenets/card";
// import TodoContainer from "./componenets/todocomponenet";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Landing from "./pages/landing";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { useState } from "react";
function App(){
  const [users,setusers]=useState([
    {
        username:"bavan",
       password:"123" 
    }
])
  return(
    <div>

  <BrowserRouter>
 


  <Routes>
    <Route path='/' element={<Login users={users} setusers={setusers}></Login>}></Route>
    <Route path='/signup' element={<Signup  users={users} setusers={setusers}></Signup>}></Route>
    <Route path='/landing' element={<Landing></Landing>}></Route>
    </Routes>
    </BrowserRouter>
</div>

  )
}
export default App;
