import React from 'react';
import './TaskLine.css';

import taskOption from '../icons/icon-task-options.png';
import redClock from '../icons/clock-icon-red.png';
import blackClock from '../icons/clock-icon-black.png';

class TaskLine extends React.Component {



    render() {
        const { task } = this.props;

        const clockIcon = () => {
            return task.finishTime.split(" ").splice(-1)[0] === "delays" ?
                (<span style={{ color: "#f94c86", fontSize: "12px" }}><img src={redClock} alt="red clock" width="12px"/> {task.finishTime}</span>) :
                (<span style={{ color: "#b5becf", fontSize: "12px" }}><img src={blackClock} alt="black clock" width="12px"/> {task.finishTime}</span>);
        }

        return (
            <div className="task">
                <div className="circle"><span>{task.title.charAt(0)}</span></div>
                <div className="taskContent">
                    <span className="taskTitle">{task.title}</span>
                    <br />
                    {clockIcon()}
                </div>
                <div className="optImg"><img src={taskOption} alt="task options" width="6px"/></div>
            </div>
        );
    }
}

export default TaskLine;

