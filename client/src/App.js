import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Landing from "./components/landing/landing";
import DayLog from "./components/dayLog/dayLog";
import NavBar from "./components/nav/navbar/navbar";

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
            <Router>
                <NavBar/>

                <Switch>
                    <Route path="/landing">
                        <Landing getUser = {getUser}/>  
                    </Route>
                    <Route path="/daylog">
                        <DayLog userData={userData} setUserData={setUserData} factors={userData.factors}/>
                    </Route>
                </Switch>
                      
                
            </Router>
            
        </div>
    );
}

export default App;
