import * as React from "react";
import * as $ from 'jquery';
import {InitTree} from "../Helpers/InitTree";
import StateStore from "../state/StateStore";


class Tree extends React.Component <{}, {}>{
    ref : any;

    constructor(props: {}) {
        super(props);
        this.ref = null;
    }


    //After first render
    componentDidMount() {
        console.log('componentDidMount');

    }

    shouldComponentUpdate(){
        console.log('componentDidUpdate');
        console.log('Data: ', StateStore.getInstance().get('Data'));
        console.log('currentUser: ', StateStore.getInstance().get('currentUser'));
        console.log('LogInState: ' ,StateStore.getInstance().get('LogInState'));
        console.log('LogIOutState: ' , StateStore.getInstance().get('LogIOutState'));

        if(!!StateStore.getInstance().get('currentUser') &&
            !StateStore.getInstance().get('LogInState') &&
            !StateStore.getInstance().get('LogOutState') &&
            StateStore.FirstUse === 1
            ||
            StateStore.getInstance().get('LogInState') &&
            StateStore.getInstance().get('LogOutState')
        ) {
            return true;
        }
        return false;
    }

    componentDidUpdate() {
        StateStore.FirstUse = 0;
        new InitTree($(this.ref), StateStore.getInstance().get('Data'));
        console.log('****  Done  ****');
    }

    //Befor component dead
    componentWillUnmount() {
        if(StateStore.getInstance().get('LogOutState') === true)
            StateStore.getInstance().set('TreeState', $(this.ref).find('li'));
        $(this.ref).off();
    }


    setRef = (ulElement : any)=> {
        this.ref = ulElement;
    };

    public render() {
        return (<ul className="left tree" ref={this.setRef} tabIndex={0}/>);
    }
}

export default Tree;