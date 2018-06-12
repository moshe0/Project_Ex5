import * as React from 'react'
import '../App.css';
import Tree from './Tree';
import UserInteraction from './UserInteraction';


class Main extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div className="MainClass">
                <Tree/>
                <UserInteraction/>
            </div>
        );
    }
}

export default Main;
