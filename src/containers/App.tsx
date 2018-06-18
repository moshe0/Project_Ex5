import Header from './Header';
import Main from './Main';
import * as React from 'react'
import StateStore from "../state/StateStore";
import LogIn from "../components/LogIn";
import LogOut from "../components/LogOut";
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import {appService} from "../AppService";



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
            let userLogin = this.state.userLogin;
            this.setState({
                userLogin: userLogin
            });
        });
    }

    Login = async () => {
        const LoginUser = await appService.GetSpecificUser(this.state.userLogin, this.state.passwordLogin);
        const Data = await appService.GetData();

        if(!!LoginUser && !!Data) {
            StateStore.FirstUse = 1;
            StateStore.getInstance().setMany({
                'currentUser' : LoginUser,
                'Data' : Data,
                'LogOutState': false,
                'LogInState': false
            });
        }
    };

    Yes = () => {
        StateStore.getInstance().setMany({
            'HoldReceiver': null,
            'currentUser': null,
            'Data' : [],
            'LogInState': true,
        });
    };

    No = () => {
        StateStore.getInstance().setMany({
            'LogOutState': false,
            'Receiver': StateStore.getInstance().get('HoldReceiver'),
            'HoldReceiver': null,
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