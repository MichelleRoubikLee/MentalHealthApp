import React from 'react';
import Login from "./login/login";
import Register from "./register/register"
import "./landing.css";
import "../../styles.css"



function Landing(props) {


    return (
        <div className="Landing">
            <h4 className="title__landing">Welcome to Feel Better. A site to track your health and environmental factors to see what relates to how you feel.</h4>
            <div className="flex-container__landing">
                <Login  getUser = {props.getUser} />
                <Register getUser = {props.getUser} />
            </div>
        </div>
        
    );
}

export default Landing;
