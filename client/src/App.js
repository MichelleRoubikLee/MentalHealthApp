import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles.css';
import Landing from "./components/landing/landing";
import DayLog from "./components/dayLog/dayLog";
import NavBar from "./components/nav/navbar/navbar";
import Profile from "./components/profile/profile";
import Visual from "./components/visual/visual";
import HistoryLogs from "./components/historyLogs/historyLogs";
import jwt_decode from "jwt-decode";
import {API_BASE_URL} from './components/config/default';


function App() {
    // add welcome page to avoid re-rendering?
    // send token with all tracking updates
    // chartsjs api
    // calculate time now - time of last log to see if can log again or not

    const [userData, setUserData] = useState({factors: []});

    var token = sessionStorage.getItem('sessionId');

    const getUser = async () => {
        if(token){
            var decoded = jwt_decode(token);
            const newurl = API_BASE_URL + decoded._id;
            const res = await axios({
                method: 'get',
                url: newurl,
            });
            setUserData(res.data);
        }
    }

    useEffect(async () => {
        await getUser()
    }, []);

    
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/profile">
                        <NavBar userData={userData} setUserData={setUserData} />
                        <Profile userData={userData} setUserData={setUserData} getUser = {getUser}/>
                    </Route>
                    <Route path="/daylog">
                        <NavBar userData={userData} setUserData={setUserData}/> 
                        <DayLog userData={userData} setUserData={setUserData} factors={userData.factors} getUser = {getUser} />
                    </Route>
                    <Route path="/historylogs">
                        <NavBar userData={userData} setUserData={setUserData}/> 
                        <HistoryLogs userData={userData} setUserData={setUserData}/>
                    </Route>
                    <Route path="/visual">
                        <NavBar userData={userData} setUserData={setUserData}/> 
                        <Visual userData={userData} setUserData={setUserData}/> 
                        
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
