import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Landing from "./components/landing/landing";
import DayLog from "./components/dayLog/dayLog";
import NavBar from "./components/nav/navbar/navbar";
import SideBar from "./components/nav/sidebar/sidebar";

import jwt_decode from "jwt-decode";
import {API_BASE_URL} from './components/config/default';


function App() {
    const [userData, setUserData] = useState({factors: []});

    const getUser = async () => {
        var token = sessionStorage.getItem('sessionId');
        var decoded = jwt_decode(token);
        const newurl = API_BASE_URL + decoded._id;
        // console.log(newurl);
        const res = await axios({
            method: 'get',
            url: newurl,
        });
        setUserData(res.data);
        console.log(res.data);
    }

    useEffect(async () => {
        await getUser()
    }, []);


    return (
        <div className="App">
            <NavBar/>
            <SideBar/>
            <Landing getUser = {getUser}/>        
            <DayLog userData={userData} setUserData={setUserData} factors={userData.factors}/>
        </div>
    );
}

export default App;
