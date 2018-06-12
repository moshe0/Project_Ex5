import Header from './Header';
import Main from './Main';
import * as React from 'react'
import StateStore from "../state/StateStore";
import {DB} from "../dataBase/DB";
import LogIn from "../components/LogIn";
import LogOut from "../components/LogOut";
import {BrowserRouter, Redirect, Route} from 'react-router-dom';



interface IAppUserState{
    userLogin : string,
    passwordLogin : string
}

class App extends React.Component<{}, IAppUserState>{
    canLogin : boolean;

    constructor(props: {}) {
        super(props);

        this.state = {
            userLogin: 'Moshe',
            passwordLogin: '11'
        };

        StateStore.getInstance().subscribe(()=>{
            this.forceUpdate();
        });
    }

    Login = () => {
        const LoginUser = DB.GetSpecificUser(this.state.userLogin, this.state.passwordLogin);
        if(!!LoginUser) {
            StateStore.FirstUse = 1;
            StateStore.getInstance().setMany({
                'currentUser' : LoginUser,
                'Data' : DB.GetData(),
                'LogOutState': false,
                'LogInState': false
            });
        }
    };

    Yes = () => {
        StateStore.getInstance().setMany({
            'HoldReciver': null,
            'currentUser': null,
            'Data' : [],
            'LogInState': true,
        });
    };

    No = () => {
        StateStore.getInstance().setMany({
            'LogOutState': false,
            'Reciver': StateStore.getInstance().get('HoldReciver'),
            'HoldReciver': null,
        });
    };


    public InputChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let name = event.target.name;
        const value = event.target.value;

        if(name === 'userLogin')
            this.setState({ userLogin: value });
        else
            this.setState({ passwordLogin: value });

    };

    ShowLogin = () => {
        const canLogin = !!this.state.userLogin && !!this.state.passwordLogin;

        if (!!StateStore.getInstance().get('currentUser')) {
            return (<Redirect to="/" />)
        }

        return <LogIn canLogin={canLogin} passwordLogin={this.state.passwordLogin} userLogin={this.state.userLogin} InputChangedHandler={this.InputChangedHandler} LoginCallback={this.Login}/>
    };

    ShowLogOut = () => {
        if (!StateStore.getInstance().get('currentUser')) {
            return (<Redirect to="/LogIn" />)
        }

        return <LogOut YesCallback={this.Yes} NoCallback={this.No}/>
    };

    public render() {
        const currentUser = !!StateStore.getInstance().get('currentUser');
        console.log(">>>>>>>>>>>>>>", currentUser);
        return (
            <BrowserRouter>
                <div className="bodyClass">
                    {!currentUser ? (<Redirect to='/LogIn'/>) : <div/>}
                    <Route path='/LogIn' render={this.ShowLogin}/>
                    <Route path='/LogOut' render={this.ShowLogOut}/>
                    <Header/>
                    <Main/>
                </div>
            </BrowserRouter>
        );
    }
}


export default App;