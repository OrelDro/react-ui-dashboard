import React from 'react';
import './BottomPanel.css';

import TaskLine from './TaskLine';
import MessageLine from './MessageLine';
import ActivityLine from './ActivityLine';

class BottomPanel extends React.Component {

    render() {
        const { data } = this.props;

        const notifications = data.notifications.map((not, idx) => {
            return (
                <div key={idx} className="circle" style={idx === 0 ? { backgroundColor: "#5384ff" } : { backgroundColor: "#f83c7b" }}><span>{not.num}</span></div>
            );
        })

        const content = () => {
            if (data.header === "Tasks") {
                return data.tasks.map( (task,idx) => {
                    return (<TaskLine key={idx} task={task} ></TaskLine>);
                });
            } else if (data.header === "Messages") {
                return data.messages.map( (message,idx) => {
                    return (<MessageLine key={idx} message={message} ></MessageLine>)
                });
            }else {
                return data.activities.map( (act,idx) => {
                    return (<ActivityLine key={idx} activity={act} ></ActivityLine>);
                })
            }
        }

        return (
            <div className="panelMain">

                <div className="panelHeader">
                    <h1>{data.header}</h1>
                    <span className="backspace"></span>
                    {notifications}
                </div>

                <div>
                    {content()}
                </div>

            </div>
        );
    }
}

export default BottomPanel;