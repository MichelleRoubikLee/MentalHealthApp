import React, { useState } from 'react';
import axios from 'axios';
import "./navbar.css";
import TrackList from "./../trackList/trackList"


function NavBar(props) {

    return (
        <div className="NavBar">
           <nav className="navbar navbar-dark sticky-top bg_pink flex-md-nowrap p-0 navbar-expand-md">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0 bg_pinkorange" href="#">Feel Better</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/profile">Profile</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/daylog">Daily Log</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/historylogs">Log History</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Visuals</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Sign Out</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block bg_light_orange sidebar">
                        <div className="sidebar-sticky">
                            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>Tracking:</span>
                                <a className="d-flex align-items-center text-muted" href="#">
                                    <span data-feather="plus-circle"></span>
                                </a>
                            </h6>
                            <ul className="nav flex-column mb-2">
                                {props.userData.factors.map((factorData, index) => (
                                    <TrackList key={index} factor={factorData} />
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NavBar;



