import * as React from "react";
import {Link} from "react-router-dom";
import StateStore from "../state/StateStore";


class TreeActions extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    OnClick = () =>{
        StateStore.getInstance().set('HoldReceiver', StateStore.getInstance().get('Receiver'));
        StateStore.getInstance().set('Receiver', null);
        StateStore.getInstance().set('ModalState', true);

        // event.target.name

    };

    public render() {
        return (
            <div className="ActionTree">
                <div title="Edit User" className="TreeActionsImages EditImage"/>
                <div title="Delete selected item" className="TreeActionsImages DelImage"/>
                <Link to='/Add'><div title="Add" className="TreeActionsImages AddImage" onClick={this.OnClick}/></Link>
                <div title="Flattening" className="TreeActionsImages FlatteningImage"/>

            </div>
        );
    }
}


export default TreeActions;