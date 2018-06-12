import * as React from "react";
import {Message} from "../Model/Message";
import {DB} from "../dataBase/DB";
import StateStore from "../state/StateStore";


interface IMessageState{
    Messages: Message[];
}

class MessageHistory extends React.Component <{}, IMessageState>{

    stateStore = StateStore.getInstance();
    messagesBlock : any;

    constructor(props: {}) {
        super(props);
        this.messagesBlock = React.createRef();
        this.state = {
            Messages : [],
        };

        this.stateStore.subscribe(()=>{
            if(!! this.stateStore.get('currentUser') && !! this.stateStore.get('Reciver')) {
                this.setState({
                    Messages: DB.GetMessages(this.stateStore.get('currentUser'), this.stateStore.get('Reciver'))
                });
            }
            else if(!!this.stateStore.get('HoldReciver')){
                this.setState({
                    Messages: DB.GetMessages(this.stateStore.get('currentUser'), this.stateStore.get('HoldReciver'))
                });
            }
            else{
                this.setState({
                    Messages: []
                });
            }
        });
    }

    //Befor render
    componentWillMount(){
        if(!! this.stateStore.get('currentUser') && !! this.stateStore.get('Reciver')) {
            this.setState({
                Messages: DB.GetMessages(this.stateStore.get('currentUser'), this.stateStore.get('Reciver'))
            });
        }
        else if(!!this.stateStore.get('HoldReciver')){
            this.setState({
                Messages: DB.GetMessages(this.stateStore.get('currentUser'), this.stateStore.get('HoldReciver'))
            });
        }
    }

    //After render
    componentDidMount(){
        this.messagesBlock.current.scrollTop = this.messagesBlock.current.scrollHeight;
    }

    // After updating occurs
    componentDidUpdate(){
        this.messagesBlock.current.scrollTop = this.messagesBlock.current.scrollHeight;
    }

    public render() {
        if(! this.stateStore.get('currentUser')){
            return (
                <div className="content" ref={this.messagesBlock}/>
            );
        }
        const listMessages = this.state.Messages.map((item, idx) => {
            const itemClassName = this.stateStore.get('currentUser').Name === item.SendingUser? 'MineMessage MessageHistory' : 'OtherMessage MessageHistory';
            let Reciver = '';
            if(!! this.stateStore.get('Reciver'))
                Reciver = this.stateStore.get('Reciver').getType();
            else if(!! this.stateStore.get('HoldReciver'))
                Reciver = this.stateStore.get('HoldReciver').getType();

            if(Reciver === 'group') {
                return (
                    <div className={'message'} key={idx}>
                    <div className={itemClassName}>
                        <div className={'MessageUserSending'}>{item.SendingUser}</div>
                        {item.Content}
                        <br/>
                        <div className={'MessageTime'}>{item.TimeSent}</div>
                    </div>
                    </div>
                );
            }
            else{
                return (
                    <div className={'message'} key={idx}>
                    <div className={itemClassName}>
                        {item.Content}
                        <br/>
                        <div className={'MessageTime'}>{item.TimeSent}</div>
                    </div>
                    </div>
                );
            }
        });

        return (
            <div className="content" ref={this.messagesBlock}>
                {listMessages}
            </div>
        );
    }
}

export default MessageHistory;