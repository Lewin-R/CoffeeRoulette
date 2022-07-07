import * as React from 'react';
import Navbar from "./Navbar";


const Account = () => {
    let userInfo = sessionStorage.getItem('User-Info');

    let profile = userInfo!.at(0);
    let id_token = userInfo!.at(1);
    let name = userInfo!.at(2);
    let img_url = userInfo!.at(3);
    let email = userInfo!.at(4);
    let phone;

    return (
        <div>
            <Navbar/>
            <div className="flex-box align-items-center justify-content-center">
                <div className="centered-div float-container">
                    <div className="float-child">
                        <label htmlFor="">Aktueller Nutzer</label>
                        <br/>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Profil</th>
                                <th scope="col">Name</th>
                                <th scope="col">E-Mail</th>
                                <th scope="col">Telefon</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th>{profile}</th>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{phone}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
);
}

export default Account;
