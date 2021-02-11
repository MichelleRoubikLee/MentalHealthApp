import React, { useState } from 'react';

import Login from "./login/login";
import Register from "./register/register"
import "./landing.css";
import "../../styles.css"



function Landing(props) {


    return (
        <div className="Landing flex-container">
            <Login  getUser = {props.getUser} />
            <Register getUser = {props.getUser} />
        </div>
    );
}

export default Landing;
