import React from 'react';
import './Header.css';

import LeftMenuIcon from '../icons/icon-toggleMenu.png';
import searchIcon from '../icons/icon-search.png';
import messageIcon from '../icons/icon-message.png';
import notificationsIcon from '../icons/icon-notifications.png';
import activeUser from '../icons/activeUser.png';
import polygonIcon from '../icons/icon-polygon.png';

class Header extends React.Component {
    componentDidMount() {
        this.leftMenu = document.querySelector('.App-LeftMenu');
    }

    onClickHandler = (event) => {
        const leftMenuClassList =  event.target.classList;
        if(leftMenuClassList.contains('toggleMenu')) {
            leftMenuClassList.remove('toggleMenu');
            this.leftMenu.classList.remove('closeLeftMenu');
        }
        else {
            leftMenuClassList.add('toggleMenu');
            this.leftMenu.classList.add('closeLeftMenu');
        }
    }
    
    render() {
        return (
            <header className="mainHeader">
                <div><img src={LeftMenuIcon} alt="toggle side menu" onClick={this.onClickHandler} /></div>
                <div><img src={searchIcon} alt="search" /></div>
                <div className="backspace"></div>
                <div><input type="button" value="+ Add project" /></div>
                <div><img src={messageIcon} alt="messages" /></div>
                <div><img src={notificationsIcon} alt="notifications" /></div>
                <div><img src={activeUser} alt="login user" /></div>
                <div className="polygon"><img src={polygonIcon} alt="polygon" /></div>
            </header>
        )
    }
}

export default Header;