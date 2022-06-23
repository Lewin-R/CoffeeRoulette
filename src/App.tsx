import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import './App.css';
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";

const App = () => {
    return (
        <div className="App">
            <Login/>
        </div>
    );
}

export default App;

