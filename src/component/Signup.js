import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:3000/Signup",{
                email,password
            })
            .then(res=>{
                if(res.data ==="exist"){
                    alert("User already exists")
                }
                else if(res.data ==="notexist"){
                    history("/Home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Signup</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <input className="button" type="submit" onClick={submit} />

            </form>

            <p>OR</p>

            <Link className="link" to="/">Login Page</Link>

        </div>
    )
}

export default Login
