import React from 'react'
import Story from './Story';
import './StoryReel.css';


function StoryReel() {
    return (
        <div className='storyReel'>
            <Story image={process.env.PUBLIC_URL + '/stories_photos/Me_story.jpg'}
            profileSrc={process.env.PUBLIC_URL + '/stories_photos/Me.jpg'}
            title='Your Story'
            />
            <Story image={process.env.PUBLIC_URL + '/stories_photos/ElonMusk_story.jpg'}
            profileSrc={process.env.PUBLIC_URL + '/stories_photos/ElonMusk.jpg'}
            title='Elon Musk'
            />
            <Story image={process.env.PUBLIC_URL + '/stories_photos/GarryKasparov_story.jpg'}
            profileSrc={process.env.PUBLIC_URL + '/stories_photos/GarryKasparov.jpg'}
            title='Garry Kasparov'
            />
            <Story image={process.env.PUBLIC_URL + '/stories_photos/Google_story.jpg'}
            profileSrc={process.env.PUBLIC_URL + '/stories_photos/Google.jpg'}
            title='Peter Li'
            />
            <Story image={process.env.PUBLIC_URL + '/stories_photos/VitalikButerin_story.jpg'}
            profileSrc={process.env.PUBLIC_URL + '/stories_photos/VitalikButerin.jpeg'}
            title='Vitalik Buterin'
            />
        </div>
    )
}

export default StoryReel;
