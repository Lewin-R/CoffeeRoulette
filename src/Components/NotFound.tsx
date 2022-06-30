import React from 'react';
import "../App.css"

const NotFound = (val:any) => {
    return (
        <div className="centered-div">
                <h2>404 Page not found</h2>
            <div className={""}>
                <a href="/login">
                    <button className={"btn btn-primary"}>Back to Login</button>
                </a>
            </div>


        </div>
    );
}

export default NotFound;
