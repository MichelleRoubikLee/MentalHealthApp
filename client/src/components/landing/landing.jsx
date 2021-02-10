import React, { useState } from 'react';

import Login from "./login/login";
import Register from "./register/register"
import "./landing.css";
import "../../styles.css"



function Landing(props) {

    const [currentUser, setCurrentUser] = useState();

    return (
        <div className="Landing flex-container">
            <Login currentUser = {currentUser} setCurrentUser = {setCurrentUser} getUser = {props.getUser} setIsLoggedIn={props.setIsLoggedIn}/>
            <Register currentUser = {currentUser} setCurrentUser = {setCurrentUser} setIsLoggedIn={props.setIsLoggedIn}/>
        </div>
    );
}

export default Landing;
