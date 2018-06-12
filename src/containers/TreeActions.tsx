import * as React from "react";


class TreeActions extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
                <div className="ActionTree">
                    <div className="TreeActionsImages EditImage"/>
                    <div className="TreeActionsImages DelImage"/>
                    <div className="TreeActionsImages AddImage"/>
                </div>
        );
    }
}


export default TreeActions;