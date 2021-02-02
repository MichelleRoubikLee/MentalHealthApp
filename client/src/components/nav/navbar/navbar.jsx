import React, { useState } from 'react';
import axios from 'axios';
import "./navbar.css"


function NavBar(props) {

    return (
        <div className="NavBar">
            <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
                <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
                <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"></input>
                <ul class="navbar-nav px-3">
                    <li class="nav-item text-nowrap">
                    <a class="nav-link" href="#">Sign out</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;



