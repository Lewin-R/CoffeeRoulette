import React from "react";
import {Navigate} from "react-router-dom";

class ProtectedRoute extends React.Component<{ state: any, children: any }> {
    render() {
        let {state, children} = this.props;
        if (state === "false") {
            return <Navigate to={"/login"} replace/>;
        }
        return children;
    }
}

export default ProtectedRoute;
