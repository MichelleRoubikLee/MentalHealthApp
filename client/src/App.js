import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles.css';
import Landing from "./components/landing/landing";
import DayLog from "./components/dayLog/dayLog";
import NavBar from "./components/nav/navbar/navbar";
import Profile from "./components/profile/profile"
import HistoryLogs from "./components/historyLogs/historyLogs"
import jwt_decode from "jwt-decode";
import {API_BASE_URL} from './components/config/default';


function App() {
    //fix register so returns token like does in login
    //weather api
    //chartsjs api

    const [userData, setUserData] = useState({factors: []});
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    

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
    }

    useEffect(async () => {
        await getUser()
    }, []);

    
    return (
        <div className="App">
            <Router>
                <NavBar userData={userData} setUserData={setUserData}/>
                <Switch>
                    <Route path="/profile">
                        <Profile userData={userData} setUserData={setUserData} getUser = {getUser}/>
                    </Route>
                    <Route path="/daylog">
                        <DayLog userData={userData} setUserData={setUserData} factors={userData.factors} getUser = {getUser}/>
                    </Route>
                    <Route path="/historylogs">
                        <HistoryLogs userData={userData} setUserData={setUserData}/>
                    </Route>
                    <Route path="/">
                        <Landing getUser = {getUser}/>  
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
