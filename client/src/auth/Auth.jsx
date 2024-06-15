import React, { useContext, useState } from 'react'
import "./auth.css"
import { ContextPrivder } from '../App'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { emailRegex, passwordRegex, usernameRegex } from '../components/regex/regex';

const Auth = () => {
    const navigate = useNavigate()
    const {setUser} = useContext(ContextPrivder)
    const [register,setRegister] = useState(false)
    const [userState,setUserState] = useState({
        name:"",
        email:"",
        password:""
    })
    const {name,email,password} = userState;
    const changeHandler = (e) => {
        const {name,value} = e.target;
        setUserState({...userState,[name]:value})
    }
    const submitHandler = async (e)  =>{
        e.preventDefault()
			if (!usernameRegex.test(name)) {
				alert('Invalid username(Alphanumeric and underscore, at least 5 characters)');
				return;
			  }else  if (!emailRegex.test(email)) {
				alert('Invalid email(Basic email pattern)');
				return;
			  }else  if (!passwordRegex.test(password)) {
				alert('Invalid password(At least 8 characters, one uppercase, one lowercase, one number)');
				return;
			  }else{
                try{
                  await axios.post("https://senwell-task.onrender.com/users/signUp",{body:userState}).then((resp)=>{
                    alert(resp.data)
                    setRegister(true)
                  })
                }catch(err){
                  console.log(err);
                }
                 setUserState({
                    name:"",
                    email:"",
                    password:""
                })
			  }	
    }

    const login = async (e) =>{
        e.preventDefault()
        if (!emailRegex.test(email)) {
            alert('Invalid email(Basic email pattern)');
            return;
          }else  if (!passwordRegex.test(password)) {
            alert('Invalid password(At least 8 characters, one uppercase, one lowercase, one number)');
            return;
          }else{
            try{
              await axios.post("https://senwell-task.onrender.com/users/signIn",{body:userState}).then((resp)=>{
                if (resp.data == "available") {
                  localStorage.setItem("email",userState.email)
                  alert("succesfully login")
                  setUser(true)
                  navigate("/")
                }else{
                  alert("wrong password")
                }
              })
            }catch(err){
              console.log(err);
            }
             setUserState({
                name:"",
                email:"",
                password:""
            })
          }
    }

    


  return (
    <section className='auth-section' >
        <form className='a-form' onSubmit={register ? login : submitHandler} >
            <h6> {register ? "Login" : "Register First" }</h6>
            {!register && <input type='text' placeholder='Enter Name' name='name' value={name} onChange={changeHandler} />}
            <input type='email' placeholder='Enter Email' name='email' value={email} onChange={changeHandler} />
            <input type='password' placeholder='Enter Password' name='password' value={password} onChange={changeHandler} />
            <button type='submit' >Sign { register? "In" : "Up" }</button>
            <p onClick={() => {setRegister(prev => !prev); setUserState({name:"",email:"",password:""});}} > {register ? "Sign Up" : "Sign In"}</p>
        </form>
    </section>
  )
}

export default Auth
