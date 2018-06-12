import * as React from "react";


class TreeActions extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
                <div className="ActionTree">
                    <div title="Edit User" className="TreeActionsImages EditImage"/>
                    <div title="Delete selected item" className="TreeActionsImages DelImage"/>
                    <div title="Add" className="TreeActionsImages AddImage"/>
                    <div title="Flattening" className="TreeActionsImages FlatteningImage"/>

                </div>
        );
    }
}


export default TreeActions;