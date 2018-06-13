import * as React from "react";
import {Message} from "./../Models/Message";
import StateStore from "../state/StateStore";
import * as moment from 'moment'
import {DB} from "../dataBase/DB";
import {GetNextId} from "../Helpers/GetNextId";



interface ISendingMessageState {
    inputVal: string
}


class SendingMessage extends React.Component <{}, ISendingMessageState> {
    stateStore = StateStore.getInstance();
    constructor(props: {}) {
        super(props);

        this.state = {
            inputVal: '',
        }
    }


    private handleInputChange = (e: any) => {
        this.setState({
            inputVal: e.target.value
        });
    };

    private handleButtonClick = () => {
        if(this.state.inputVal.trim() === '')
            return;
        let m = new Message(GetNextId(DB.Messages) ,this.state.inputVal, this.stateStore.get('currentUser').getName(), this.stateStore.get('Reciver').getName(), moment().format('h:mm:ss'));
        this.setState({inputVal: ''});
        DB.SetMessage(m);
        this.stateStore.onStoreChanged();
    };

    EnterKeyPress = (key : any) => {
        if (key.key === 'Enter') {
            this.handleButtonClick();
        }
    };


    public render() {
        let allStatus = true;
        let buttonStatus = true;
        if(!! this.stateStore.get('currentUser') && this.stateStore.get('Reciver'))
            allStatus = false;
        if(!allStatus && this.state.inputVal.trim() !== '')
            buttonStatus = false;
        let btnClass = (!buttonStatus) ? 'buttonActive' : 'buttonDisabled';


        return (
            <div className={'SendingMessage'}>
                <input onKeyUp={this.EnterKeyPress} type='text' className='MessageInput' onChange={this.handleInputChange} value={this.state.inputVal} disabled={allStatus} placeholder={'Type Message...'}/>
                <button onClick={this.handleButtonClick} className={btnClass} type='button' disabled={buttonStatus}> > </button>
            </div>
        );
    }
}

export default SendingMessage;