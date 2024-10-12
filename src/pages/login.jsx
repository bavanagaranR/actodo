import { useState } from "react"

import { Link } from "react-router-dom"

import { useNavigate } from "react-router-dom"

function Login(props){

const navigate = useNavigate()
const [eusername,setEusername] =useState()
const[epassword,setEpassword]=useState()
const [ruser,setruser]=useState(true)

const users = props.users

   
    function handleUInput(evt){
        setEusername(evt.target.value)

    }
    function handlepInput(evt){
        setEpassword(evt.target.value)
         
    }

    function checkUser(){
        var userfound = false
       
        users.forEach(function(item)
    {
        if(item.username === eusername && item.password === epassword)
            {
            console.log("LOGIN SUCESSFUL")
            userfound = true
            navigate("/landing",{state:{user:eusername}})

            console.log(ruser)
        }
       
    })
    if(userfound === false){
        console.log("login failed")
        setruser(false)
    }

    }


    return(<div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium"> Hey Hii</h1>
            {ruser?<p>I help you to manage your activity after you login :)</p>: <p className="text-red-500">"please signup before u login"</p>}
            
            <div className="flex flex-col gap-2 my-2">
                <input type="text"
                    className="w-52 border-black p-1 bg-transparent border rounded-md"
                    placeholder="user name"
                    onChange={handleUInput}></input>

                <input type="text"
                    className="w-52 border-black p-1 bg-transparent border rounded-md"
                    placeholder="Password"
                    onChange={handlepInput}></input>

                
                    <button onClick={checkUser} className="bg-[#8272DA] w-24 p-1 rounded-md">
                         Login
                    </button>
                    <p> Don't have an account? <Link to={"/signup"} className="underline">Signup</Link></p>
            </div>

        </div>

    </div>)

}
export default Login