import React from 'react';
import './ActivityLine.css';

import nina from '../icons/nina.png';
import alex from '../icons/alex.png';
import alexandra from '../icons/alexandra.png';
import james from '../icons/james.png';
import blackClock from '../icons/clock-icon-black.png';

const avatar = {
    ninaJones: nina,
    jamesSmith: james,
    alexCloony: alex,
    alexandraSpears: alexandra
};

class ActivityLine extends React.Component {
    render() {

        const { activity } = this.props;

        return (
            <div className="activity">
                <div>
                    <img src={avatar[activity.avatar]} alt="activity user avatar" className="activityAvatar" />
                </div>
                <div className="vl"></div>
                <div className="activityContent">
                    <span>
                        <span className="activitySender">{activity.sender}</span>
                        <span className="activityParagraph">{activity.content}</span>
                        <span className="activityAct">{activity.active}</span>
                    </span><br />
                    <span className="activityTime"><img src={blackClock} alt="black clock" width="12px"/> {activity.time}</span>
                </div>

            </div>
        )
    }
}

export default ActivityLine;