import React from "react";
import {
    Routes,
    Route,
    Link,
    Navigate,
    Outlet,
} from 'react-router-dom';


const ProtectedRoute = ({ state, redirectPath}: {state: string; redirectPath: string}) => {
    if (state === "false") {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
