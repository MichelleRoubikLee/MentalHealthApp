import React, { useState } from 'react';
//import axios from 'axios';
import "./trackList.css"


function TrackList(props) {

    return (
        <div className="TrackList">
            <li className="nav-item">
                <a className="nav-link" href="#">
                <span data-feather="file-text"></span>
                {props.factor.factorName}
                </a>
            </li>
        </div>
          
    );
}

export default TrackList;



