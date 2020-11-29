import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import ReplyRoundedIcon from '@material-ui/icons/ReplyRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

function Post({ profilePic, image, username, timestamp, message }) {
    return (
        <div className='post'>
            <div className='post__top'>
                <Avatar src={profilePic} className='post__avatar' />
                <div className='post__topInfo'>
                    <h3>{username}</h3>
                    <p> {new Date(timestamp?.toDate()).toUTCString()} </p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>


            <div className="post__image">
                <img src={image} alt='' />
            </div>


            <div className='post__options'>
                <div className='post__option'>
                    <ThumbUpOutlinedIcon />
                    <p>Like</p>
                </div>
                <div className='post__option'>
                    <ChatBubbleOutlineRoundedIcon />
                    <p>Comment</p>
                </div>
                <div className='post__option'>
                    <div className='post__optionM'>
                        <ReplyRoundedIcon />
                    </div>
                    <p>Share</p>
                </div>
                <div className='post__option'>
                    <AccountCircleRoundedIcon />
                    <ExpandMoreRoundedIcon />
                </div>
            </div>

        </div>
    )
}

export default Post;
