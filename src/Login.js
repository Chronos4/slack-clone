import React from 'react'
import "./Login.css";
import {auth,provider} from './firebase';
import {Button} from '@material-ui/core';
import { useStateValue } from './StateProvider';
import actionTypes from './reducer';

function Login() {
    const [state,dispatch] = useStateValue();

    const signIn = e => {
        auth
        .signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user 
            })
        })
        .catch(error => {
            alert(error.message);
        })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="" />
                <h1>Sign in with Google</h1>
                <p></p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
