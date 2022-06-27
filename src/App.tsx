import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
} from "react-router-dom";
import './App.css';
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import login from "./Components/Login";

const App = () => {
    return (
        <div>
            <div>
               {/* <nav>
                    <ul>
                        <li>
                            <Link to="/">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/about">Members</Link>
                        </li>
                    </ul>
                </nav>*/}

                <Routes>
                    {/* redirect to login from the default path*/}
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    {/*404 Error Route*/}
                    <Route
                        path="*"
                        element={
                            <div>
                                <h2>404 Page not found</h2>
                            </div>
                        }
                    />
                </Routes>
            </div>
        </div>
    );
}




export default App;

