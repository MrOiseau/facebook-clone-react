import { Button } from '@material-ui/core';
import React from 'react'
import './Login.css';
import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../Reducer';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        // sign in...
        auth.signInWithPopup(provider)
        .then(result => {
            //push user inside data layer
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
            //console.log(result.user);
        }).catch(error => alert(error.message));
    }

    return (
        <div className='login'>
            <div className='login__logo'>
                <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg'
                    alt='Facebook'
                />
                <h2>Connect with friends and the world around you on Facebook Clone.</h2>
            </div>
            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
