import * as React from "react";
import {User} from "../Model/User";
import StateStore from "../state/StateStore";

import {Link} from "react-router-dom";

interface IHeaderState {
    currentUser : User
}

class Header extends React.Component<{},IHeaderState>  {
    constructor(props: {}) {
        super(props);

        this.state = {
            currentUser: StateStore.getInstance().get('currentUser')
        };

        StateStore.getInstance().subscribe(() => {
            this.setState({ currentUser: StateStore.getInstance().get('currentUser')} );
        });
    }

    LoginImage = () =>{
        StateStore.getInstance().set('HoldReciver', StateStore.getInstance().get('Reciver'));
        StateStore.getInstance().set('Reciver', null);
        StateStore.getInstance().set('LogOutState', true);
    };

    public render() {
        let userName = 'Not connected';
        if(!! this.state.currentUser)
            userName = this.state.currentUser.Name;
        return (
            <div className="Header">
                <Link to='/LogOut'><div className="LoginImage" onClick={this.LoginImage}/></Link>
                <div className="LoginStatus">{userName}</div>
            </div>
        );
    }
}

export default Header;