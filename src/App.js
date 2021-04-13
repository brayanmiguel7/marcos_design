import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';
import NavBar from './components/NavBar';
import Home from './components/Home';

export default function App() {

    return(

        <Router>
            <NavBar />
            <div className='container-fluid px-0'>
                <Route exact path='/'>
                    <Home />
                </Route>
            </div>
        </Router>


    )

}