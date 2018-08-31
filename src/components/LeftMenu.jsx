import React from 'react';
import './LeftMenu.css';

import merkuryLogo from '../icons/merkury.png';
import homeIcon from '../icons/icon-home.png';
import workflowIcon from '../icons/icon-workflow.png';
import statisticIcon from '../icons/icon-statistic.png';
import calendarIcon from '../icons/icon-calendar.png';
import usersIcon from '../icons/icon-users.png';
import settingsIcon from '../icons/icon-settings.png';

class LeftMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            lMenuItems: [
                {text: "Home",icon: homeIcon},
                {text: "Workflow",icon: workflowIcon},
                {text: "Statistics",icon: statisticIcon},
                {text: "Calendar",icon: calendarIcon},
                {text: "Users",icon: usersIcon},
                {text: "Settings",icon: settingsIcon},
            ]
        }
    }
    render() {
        const {lMenuItems} = this.state;
        const itemMenu = lMenuItems.map( (itm,idx) => {
            return (
                <div key={idx} className="itemMenu">
                    <img src={itm.icon} alt="home"/>
                    <span className="textLink">{itm.text}</span>
                </div>
            )
        })

        return (
            <div className="LeftMenu">
                <div className="merkLogo">
                    <img src={merkuryLogo} alt="merkury"/>
                </div>
                {itemMenu}
            </div>
        );
    }
}

export default LeftMenu;