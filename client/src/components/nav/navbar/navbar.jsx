import React, { useState } from 'react';
import axios from 'axios';
import "./navbar.css"


function NavBar(props) {

    return (
        <div className="NavBar">
           <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 navbar-expand-md">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Feel Better</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Daily Log</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Log History</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Visuals</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sign Out</a>
                    </li>
                    </ul>
                </div>
            </nav>

            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">
                                    <span data-feather="home"></span>
                                    Dashboard <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                    <span data-feather="file"></span>
                                    Orders
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                    <span data-feather="shopping-cart"></span>
                                    Products
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                    <span data-feather="users"></span>
                                    Customers
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                    <span data-feather="bar-chart-2"></span>
                                    Reports
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                    <span data-feather="layers"></span>
                                    Integrations
                                    </a>
                                </li>
                            </ul>

                            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>Saved reports</span>
                                <a className="d-flex align-items-center text-muted" href="#">
                                    <span data-feather="plus-circle"></span>
                                </a>
                            </h6>
                            <ul className="nav flex-column mb-2">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                    <span data-feather="file-text"></span>
                                    Current month
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                    <span data-feather="file-text"></span>
                                    Last quarter
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                    <span data-feather="file-text"></span>
                                    Social engagement
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                    <span data-feather="file-text"></span>
                                    Year-end sale
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NavBar;



