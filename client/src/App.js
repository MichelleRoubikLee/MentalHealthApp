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
    // send log data to chart visual
    // add tracking rewards
    // delete token from session on signout
    // add recomended tracking to list
    // create dummy data to show graphs 
    // added features: add answer string to number in log history, add welcome page to avoid re-rendering, choose to stop tracking a feature, edit a factor log

    const [userData, setUserData] = useState({factors: []});

    var token = sessionStorage.getItem('sessionId');

    const getUser = async () => {
        if(token){
            var decoded = jwt_decode(token);
            const newurl = API_BASE_URL + decoded._id;
            const res = await axios({
                method: 'get',
                headers: {'x-auth-token': token},
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
                        <Visual userData={userData} /> 
                        
                    </Route>
                    <Route path="/">
                        <Landing userData={userData} getUser = {getUser}/>  
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
