import React from 'react';
import './Body.css';

import BottomPanel from './BottomPanel';

class Body extends React.Component {
    render() {
        return (
            <div className="mainBody">
                <h1>Hello John!</h1>
                <div className="bottomPanels">
                    <BottomPanel data={this.props.data.Tasks}></BottomPanel>
                    <BottomPanel data={this.props.data.Messages}></BottomPanel>
                    <BottomPanel data={this.props.data.Activities}></BottomPanel>
                </div>
            </div>
        )
    }
}

export default Body;