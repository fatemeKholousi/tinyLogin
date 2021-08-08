import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { LoginLogic } from './loginLogic';

import { userSchema } from '../validation/UserValidation';
import { useFormik } from 'formik';
import * as yup from 'yup';

import "../App.css"

function LoginForm() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        if (email, password) {
            LoginLogic(email, password)
                .then((res) => {
                    localStorage.setItem("token", res.data.access_token);
                    localStorage.setItem("expireTime", res.data.expires_in);
                    console.log(res.data)
                    e.preventDefault();
                    alert("با موفقیت وارد شدید")
                    history.push('/simplepage')
                })
                .catch(err => {
                    console.log(err)
                    alert("مشکلی هنگام ورود رخ داده است")
                })
        }
    }

    const handleChange = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    };

    return (
        <div className="login--center">
            <h2>ورود به پنل مدیریت</h2>

            <form className="login--form">
                <div className="text--field">
                    <input name="email" value={email} onChange={handleChange} />
                    <span></span>
                    <label htmlFor="email">نام کاربری</label>
                </div>

                <div className="text--field">
                    <input type="password" value={password} onChange={handleChange} />
                    <span></span>
                    <label >کلمه عبور</label>
                </div>


                <button className="login--button" onClick={handleLogin}>ورود</button>




            </form>
        </div>
    )
}

export default LoginForm
