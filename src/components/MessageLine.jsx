import React from 'react';
import './MessageLine.css';

import nina from '../icons/nina.png';
import james from '../icons/james.png';
import reply from '../icons/message-reply.png';
import settings from '../icons/message-setting.png';

const avatar = {
    ninaJones: nina,
    jamesSmith: james
};


class MessageLine extends React.Component {
    render() {

        const { message } = this.props;

        return (
            <div className="message" style={!message.read?{backgroundColor:"#f4f5f8"}:{backgroundColor:"#ffffff"}}>
                <div><img src={avatar[message.avatar]} alt="sender avatar" className="messageAvatar" /></div>
                <div className="messageContent">
                    <span>
                    <span className="sender">{message.sender}</span><span className="time">{message.time}</span>
                    </span>
                    <span>{message.content}</span>
                    <span>
                        <img src={reply} alt="reply message" width="13px"/>
                        <img src={settings} alt="message setting" width="13px"/>
                    </span>
                </div>

            </div>
        );
    }
}

export default MessageLine;