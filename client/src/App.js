import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Landing from "./components/landing/landing";
import DayLog from "./components/dayLog/dayLog";
import jwt_decode from "jwt-decode";
import {API_BASE_URL} from './components/config/default';
import useFirstRender from "./firstRenderHook/useFirstRender";


function App() {
    const [userData, setUserData] = useState();
    const firstRender = useFirstRender();
    var factors = [];

    

    const getUser = () => {
        var token = sessionStorage.getItem('sessionId');
        var decoded = jwt_decode(token);
        const newurl = API_BASE_URL + decoded._id;
        // console.log(newurl);
        axios({
            method: 'get',
            url: newurl,
        }).then((res) => {
            setUserData(res.data);
            // console.log(res.data)
        })
    }

    useEffect(() => {
        getUser()
    }, []);

    function findFactors(){
        if(!firstRender){
            userData.factors.map((oneFactor) => {
                factors.push(oneFactor);
            })
        }
    }

    return (
        <div className="App">
            <Landing/>
            {findFactors()}
            <DayLog userData={userData} setUserData={setUserData} factors={factors}/>
        </div>
    );
}

export default App;
