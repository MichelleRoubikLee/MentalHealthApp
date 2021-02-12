import React, { useState }from 'react';
import axios from 'axios';
import '../register/register.css';
import '../../../styles.css';
import { useHistory } from 'react-router-dom';
var Regex = require("regex");



function Register(props) {    
    const [register, setRegister] = useState({
        userName: "",
        password: "",
        email: "",
    });
    let history = useHistory();

    const handleChange = (event) => {
        let n = event.target.name;
        setRegister(register => ({...register,
            [n]: event.target.value,
        }))
    }
    
    const handleRegister = (event) => {
        event.preventDefault();
        //check if email address is valid
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(register.email))
        {
            const newurl = 'http://localhost:5000/api/users/new';
            axios({
                method: 'post',
                url: newurl,
                data: {
                    userName: register.userName,
                    password: register.password,
                    email: register.email
                }
            }).then((res) => {
                if (res.status === 200) {
                    sessionStorage.setItem('sessionId', res.data);
                    history.push("/profile");
                }
                props.getUser();
            })     
        }else{
            alert(register.email + 'is not a valid email address. Please fix and try again.')
        } 
    };
        
    
    return (            
        <div className = "registerInfo flex-child">
        <div>
            <h1 className = "registerTitle" >Register</h1>
        </div>
            <form className = "form-register form-floating" onSubmit={handleRegister}>
                <label htmlFor = "registerName">Name </label>
                <input 
                    type = "text" 
                    id = "registerName" 
                    name = 'userName'  
                    className = "form-control text-box"
                    value={register.name}
                    onChange={handleChange}
                >

                </input>
                <label htmlFor = "registerEmail">Email</label>
                <input 
                    type = "text" 
                    id = "registerEmail" 
                    name = 'email'  
                    className = "form-control text-box"
                    value={register.email}
                    onChange={handleChange}
                >
                </input>
                <label htmlFor = "registerPassword">Password</label>
                <input 
                    type = "text" 
                    id = "registerPassword" 
                    name = 'password'  
                    className = "form-control text-box"
                    value={register.password}
                    onChange={handleChange}
                >

                </input>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}
export default Register;