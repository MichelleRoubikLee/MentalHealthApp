import React, { useState }from 'react';
import axios from 'axios';
import '../login/login.css';
import '../../../styles.css';
import { useHistory } from 'react-router-dom';


function Login (props) {


    const [login, setLogin] = useState({ 
        email: '', 
        password: ''
    })
    let history = useHistory();

    const handleChange = (event) => {
        let n = event.target.name;
        setLogin(login => ({...login,
            [n]: event.target.value,
        }))
    }
    
    const handleLogin = async (event) => {
        event.preventDefault();
        const newurl = 'http://localhost:5000/api/users/login';
        await axios({
            method: 'post',
            url: newurl,
            data: {
                email: login.email,
                password: login.password
            }
        }).then((res) => {
            console.log(res)
            if (res.status === 200) {
                sessionStorage.setItem('sessionId', res.data);
                history.push("/profile");
            }
            console.log(res);
            //get user sets
            props.getUser();
        });
    }

        
    return (
        <div className = "loginInfo flex-child">
            <div>
                <h1 className = "loginTitle" >Login</h1>
            </div>
            <form className = "form-login form-floating" onSubmit={handleLogin}>
                <label htmlFor = "loginEmail">Email</label>
                <input 
                    type = "text" 
                    id = "loginEmail" 
                    name = 'email'  
                    className = "form-control text-box"
                    value={login.email}
                    onChange={handleChange}
                >
                
                </input>
                <label htmlFor = "loginPassword">Password</label>
                <input 
                    type = "text" 
                    id = "loginPassword" 
                    name = 'password'  
                    className = "form-control text-box"
                    value={login.password}
                    onChange={handleChange}
                >

                </input>
                <button type="submit" className="btn btn-success">Login</button>
            </form>
        </div>
    )
}


export default Login;