import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export function Login() {
    const [user, setUser] = useState({ email: '', password: '' });

    const handleLogin = async (e) => {
        e.preventDefault();
        //Change your credential here or fetch from server
        if (user.email === "test@gmail.com" && user.password === 'test@123') {
            alert("Valid User");
        } else {
            alert("Invalid User");
        }
    }
    return (
        <>
            
        </>
    )
}

export default Login;