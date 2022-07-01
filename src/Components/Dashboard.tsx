import React from 'react';
import Navbar from './Navbar';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker} from 'react-dates';
import "react-dates/lib/css/_datepicker.css";

const Dashboard = () => {
    const [startDate, setStartDate] = React.useState();
    const [endDate, setEndDate] = React.useState();
    const [focusedInput, setFocusedInput] = React.useState();
    return (
        <div>
            <Navbar/>
            <div className={""}>
                <div className="float-container">

                    <div className="App">
                        <DateRangePicker
                            startDate={startDate}
                            startDateId="start-date"
                            endDate={endDate}
                            endDateId="end-date"
                            onDatesChange={({startDate, endDate}) => {
                                setStartDate(startDate);
                                setEndDate(endDate);
                            }}
                            focusedInput={this.state.focusedInput}
                            onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
                        />
                    </div>
                </div>

                <div className="float-child">
                    <label htmlFor="">Bis:</label>
                    <br/>

                </div>
            </div>
        </div>

)
    ;
}

export default Dashboard;