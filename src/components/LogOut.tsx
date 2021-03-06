import * as React from "react";
import Modal from "../containers/Modal";
import {Link} from "react-router-dom";
import StateStore from "../state/StateStore";

class LogOut extends React.Component<{}, {}> {
    constructor(props : {}){
        super(props);
    }

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
            'ModalState': false,
            'Receiver': StateStore.getInstance().get('HoldReceiver'),
            'HoldReceiver': null,
        });
    };

    render() {
        return (
            <Modal style={styles.modal}>
                <p style={styles.p}>
                    Do you want to logout?
                </p>
                <button style={styles.button} onClick={this.Yes}>Yes</button>
                <Link to='/' style={styles.Link}><button style={styles.buttonCancel} onClick={this.No}>No</button></Link>
            </Modal>
        );
    }
}

const styles: { [key: string]: React.CSSProperties } = {
    Link:{
        outline : 'none'
    },
    modal: {
        minWidth: '50px'
    },
    p: {
        margin: "0 0 0.5em 0",
        fontSize: '20px'
    },
    label: {
        display: "inline-block",
        marginBottom: ".5rem",
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
        border: '1px solid rgb(94, 151, 238)',
        background: '#b8e0ee',
        color: '#00779e',
        fontSize: '20px',
        cursor: 'pointer',
        borderRadius: '5px',
    },
    buttonCancel: {
        border: '1px solid rgb(111, 69, 31)',
        background: '#edd29f',
        color: '#6f451f',
        fontSize: '20px',
        cursor: 'pointer',
        borderRadius: '5px',
    },
};

styles.buttonDisabled = {
    background: '#DDDDDD',
    color: '#444753',
    fontSize: '20px',
    cursor: 'pointer',
    borderRadius: '5px'
};


export default LogOut;
