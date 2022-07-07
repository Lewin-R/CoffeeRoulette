import React from 'react';
import 'bootstrap'
import Navbar from "./Navbar";
import DatePickerComp from "./DatePicker";
import {Button} from "react-bootstrap";


function Dashboard() {

    return (
        <div>
            <Navbar/>
            <div className={"Dashboard"}>
                <div className="centered-div float-container">
                    <div className="float-child">
                        <label htmlFor="">Tage und Zeitpunkte auswählen: </label>
                        <br/>
                        <DatePickerComp/>
                    </div>
                </div>


            </div>


        </div>
    );
}

export default Dashboard;