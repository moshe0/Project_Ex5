import * as React from "react";
import Modal from "../containers/Modal";
import {Link} from "react-router-dom";
import StateStore from "../state/StateStore";



interface IAddProps{
    AddType : string[],
}

interface IAddState {
    selectedType : string,
    userName : string,
    userPassword : string,
    userAge : string,
    groupName : string,
    userNameG : string,
    groupNameG : string,
    canAdd : boolean
}

class Add extends React.Component<IAddProps, IAddState> {
    constructor(props : IAddProps){
        super(props);

        this.state = {
            selectedType: 'New user',
            userName : '',
            userPassword : '',
            userAge : '',
            groupName : '',
            userNameG : '',
            groupNameG : '',
            canAdd : false
        };
    }

    Add = () => {
    };

    Cancel = () => {
        StateStore.getInstance().setMany({
            'ModalState': false,
            'Receiver': StateStore.getInstance().get('HoldReceiver'),
            'HoldReceiver': null,
        });
    };


    private AddInputChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let name = event.target.name;
        const value = event.target.value;

        if(name === 'userName')
            this.setState({
                userName: value,
                canAdd: (value !== ''  && this.state.userPassword !== '' && this.state.userAge !== '')
            });
        else if(name === 'userPassword')
            this.setState({
                userPassword: value,
                canAdd: (this.state.userName !== ''  && value !== '' && this.state.userAge !== '')
            });
        else if(name === 'userAge')
            this.setState({
                userAge: value,
                canAdd: (this.state.userName !== ''  && this.state.userPassword !== '' && value !== '')
            });
        else if(name === 'groupName')
            this.setState({
                groupName: value,
                canAdd: value !== ''
            });
        else if(name === 'userNameG')
            this.setState({
                userNameG: value,
                canAdd: value !== ''
            });
        else if(name === 'groupNameG')
            this.setState({
                groupNameG: value,
                canAdd: value !== ''
            });

    };

    private SelectedChangedHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            selectedType: event.target.value,
            userName : '',
            userPassword : '',
            userAge : '',
            groupName : '',
            userNameG : '',
            groupNameG : '',
            canAdd : false
        });
    };


    public ff(){
        if(this.state.selectedType === 'New user'){
            return (
                <div>
                    <p style={styles.p}>
                        <label style={styles.label} htmlFor="userName">Name</label>
                        <input style={styles.input} type="text" name="userName" value={this.state.userName} onChange={this.AddInputChangedHandler} />
                    </p>
                    <p style={styles.p}>
                        <label style={styles.label} htmlFor="userPassword">Password</label>
                        <input style={styles.input} type="text" name="userPassword" value={this.state.userPassword} onChange={this.AddInputChangedHandler} />
                    </p>
                    <p style={styles.p}>
                        <label style={styles.label} htmlFor="userAge">Age</label>
                        <input style={styles.input} type="text" name="userAge" value={this.state.userAge} onChange={this.AddInputChangedHandler} />
                    </p>
                </div>
            );
        }
        else if(this.state.selectedType === 'New group'){
            return (
                <div>
                    <p style={styles.p}>
                        <label style={styles.label} htmlFor="groupName">Name</label>
                        <input style={styles.input} type="text" name="groupName" value={this.state.groupName} onChange={this.AddInputChangedHandler} />
                    </p>
                </div>
            );
        }
        else if(this.state.selectedType === 'Add user to existing group'){
            return (
                <div>
                    <p style={styles.p}>
                        <label style={styles.label} htmlFor="userNameG">Name</label>
                        <input style={styles.input} type="text" name="userNameG" value={this.state.userNameG} onChange={this.AddInputChangedHandler} />
                    </p>
                </div>
            );
        }
        else{
            return (
                <div>
                    <p style={styles.p}>
                        <label style={styles.label} htmlFor="groupNameG">Name</label>
                        <input style={styles.input} type="text" name="groupNameG" value={this.state.groupNameG} onChange={this.AddInputChangedHandler} />
                    </p>
                </div>
            );
        }
    }


    render() {
        const AddTypes = this.props.AddType.map((item, idx) => {
            return (<option key={idx} value={item}>{item}</option>);
        });

        const divSelected = this.ff();

        return (
            <Modal style={styles.modal}>
                <div style={styles.divOfType}>
                    <span style={styles.p}>
                        <label style={styles.input} htmlFor="AddType">Type of add:</label>
                        <select style={styles.input} name="AddType" onChange={this.SelectedChangedHandler}>
                            {AddTypes}
                        </select>
                    </span>
                </div>
                {divSelected}
                <button style={this.state.canAdd ? styles.button : styles.buttonDisabled} disabled={!this.state.canAdd} onClick={this.Add}>Add</button>
                <Link to='/'><button style={styles.button} onClick={this.Cancel}>Cancel</button></Link>
            </Modal>
        );
    }
}

const styles: { [key: string]: React.CSSProperties } = {
    modal: {
        minWidth: '70px',
        minHeight: '310px'
    },
    p: {
        margin: "0 0 0.5em 0",
        fontSize: '20px'
    },
    label: {
        display: "inline-block",
        fontSize: '20px'
    },
    input: {
        display: "block",
        width: "100%",
        outline: 'none',
        fontSize: '20px',
        borderRadius: '5px',
    },
    button: {
        background: '#5077bb',
        color: 'white',
        fontSize: '20px',
        cursor: 'pointer',
        borderRadius: '5px'
    },
};

styles.buttonDisabled = {
    background: '#DDDDDD',
    color: '#444753',
    fontSize: '20px',
    cursor: 'pointer',
    borderRadius: '5px'
};


styles.divOfType ={
    marginBottom : '40px',
};

export default Add;