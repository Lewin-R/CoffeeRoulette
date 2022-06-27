
import * as React from "react";
import any = jasmine.any;
/*
const authContext = React.createContext(null);

function useAuth() {
    const [authed, setAuthed] = React.useState(false);

    return {
        authed,
        login() {
            return new Promise((res) => {
                setAuthed(true);
                res();
            });
        },
        logout() {
            return new Promise((res) => {
                setAuthed(false);
                res();
            });
        },
    };
}

export class AuthProvider extends React.Component<{ children: any }> {
    render() {
        let {children} = this.props;
        const auth = useAuth();

        return <authContext.Provider value={auth}>{children}</authContext.Provider>;
    }
}

export default function AuthConsumer() {
    return React.useContext(authContext);
}
*/
