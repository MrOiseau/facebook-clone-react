import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MoodOutlinedIcon from '@material-ui/icons/MoodOutlined';
import { useStateValue } from '../StateProvider';
import db from '../firebase';
import firebase from 'firebase';

function MessegeSender() {
    const [{ user }, dispatch] = useStateValue();

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // publish posts
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        setInput('');
        setImageUrl('');
    };

    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className='messageSender__input'
                        placeholder={`What's on your mind, ${user.displayName}?`}
                    />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder={"image URL (Optional)"}

                    />

                    <button onClick={handleSubmit} type="submit">
                        <h4>Post It</h4>
                    </button>
                </form>
            </div>
            <div className='messageSender__bottom'>
                <div className='messageSender__option'>
                    <VideocamIcon style={{ color: '#EA4048' }} />
                    <h3>Live Video</h3>
                </div>
                <div className='messageSender__option'>
                    <PhotoLibraryIcon style={{ color: '#5EB45E' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className='messageSender__option'>
                    <MoodOutlinedIcon style={{ color: '#F7BA3A' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessegeSender;
