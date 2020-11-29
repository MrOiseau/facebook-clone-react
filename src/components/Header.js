import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import OndemandVideoRoundedIcon from '@material-ui/icons/OndemandVideoRounded';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ViewQuiltOutlinedIcon from '@material-ui/icons/ViewQuiltOutlined';
import { Avatar, IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import { useStateValue } from '../StateProvider';

function Header() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className='header'>
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"
                    alt="Facebook logo" />
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder='Search Facebook' type="text" />
                </div>
            </div>

            <div className="header__center">
                <div className="header__option header__option--active">
                    <HomeRoundedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <OndemandVideoRoundedIcon fontSize="default" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <ViewQuiltOutlinedIcon fontSize="large" />
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddCircleIcon fontSize="large" />
                </IconButton>
                <IconButton>
                    <ChatRoundedIcon fontSize="large" />
                </IconButton>
                <IconButton>
                    <NotificationsRoundedIcon fontSize="large" />
                </IconButton>
                <IconButton>
                    <ExpandMoreRoundedIcon fontSize="large" />
                </IconButton>
            </div>

        </div>
    )
}

export default Header
