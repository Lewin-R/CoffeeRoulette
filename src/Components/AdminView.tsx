import * as React from 'react';
import Navbar from "./Navbar";
import UserTable from "./UserTable";

const AdminView = () => {

    return (
        <div>

            <Navbar/>
            <div className="flex-box align-items-center justify-content-center , centered-div">
               {/* <UserTable/>*/}
            </div>
        </div>
    );
}
export default AdminView;