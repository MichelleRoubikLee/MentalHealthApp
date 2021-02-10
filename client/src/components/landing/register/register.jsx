import React, { useState }from 'react';
import axios from 'axios';
import '../register/register.css';
import '../../../styles.css';
//import { useHistory } from 'react-router-dom';


function Register(props) {    
    const [register, setRegister] = useState({
        userName: "",
        password: "",
        email: "",
    });
    //let history = useHistory();
    
    function getCurrentUser(){
        const newurl = 'http://localhost:5000/api/users/';
        axios({
            method: 'get',
            url: newurl,
        }).then((res) => {
            if(res.email === register.email){
                props.setCurrentUser(res._id)            
            }
        })
    }

    const handleChange = (event) => {
        let n = event.target.name;
        setRegister(register => ({...register,
            [n]: event.target.value,
        }))
        //console.log(n, event.target.value)
    }
    
    const handleRegister = (event) => {
        event.preventDefault();
        const newurl = 'http://localhost:5000/api/users/new';
        axios({
            method: 'post',
            url: newurl,
            data: {
                userName: register.userName,
                password: register.password,
                email: register.email
            }
        }).then(() => {
            console.log("user added");
            getCurrentUser();
            props.setIsLoggedIn(true);
            
        })            
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