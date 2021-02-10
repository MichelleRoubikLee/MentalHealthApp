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
    //after register or login, go to daily log page
    //send token with all tracking updates
    //chartsjs api

    const [userData, setUserData] = useState({factors: []});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const getUser = async () => {
        console.log(isLoggedIn);
        if(isLoggedIn){
            console.log(isLoggedIn);
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
    }

    useEffect(async () => {
        await getUser()
    }, []);

    // function renderSite(){
    //     if(isLoggedIn){
    //         return(
    //             <div>
    //                 <Route path="/profile">
    //                     <NavBar userData={userData} setUserData={setUserData}/>
    //                     <Profile userData={userData} setUserData={setUserData} getUser = {getUser}/>
    //                 </Route>
    //                 <Route path="/daylog">
    //                     <NavBar userData={userData} setUserData={setUserData}/> 
    //                     <DayLog userData={userData} setUserData={setUserData} factors={userData.factors} getUser = {getUser}/>
    //                 </Route>
    //                 <Route path="/historylogs">
    //                     <NavBar userData={userData} setUserData={setUserData}/> 
    //                     <HistoryLogs userData={userData} setUserData={setUserData}/>
    //                 </Route>
    //             </div>
    //         )
    //     }
    // }

    
    return (
        <div className="App">
            <Router>
                <Switch>
                    {/* {renderSite()} */}
                    <Route path="/profile">
                        <NavBar userData={userData} setUserData={setUserData}/>
                        <Profile userData={userData} setUserData={setUserData} getUser = {getUser}/>
                    </Route>
                    <Route path="/daylog">
                        <NavBar userData={userData} setUserData={setUserData}/> 
                        <DayLog userData={userData} setUserData={setUserData} factors={userData.factors} getUser = {getUser}/>
                    </Route>
                    <Route path="/historylogs">
                        <NavBar userData={userData} setUserData={setUserData}/> 
                        <HistoryLogs userData={userData} setUserData={setUserData}/>
                    </Route>
                    <Route path="/">
                        <Landing getUser = {getUser} setIsLoggedIn={setIsLoggedIn}/>  
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
