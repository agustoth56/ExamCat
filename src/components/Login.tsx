import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { credentials } from '../data/credentials';

function Login() {
    
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({user: "", password: ""});
    const [modalState, setModalState] = useState(false);
    const [error, setError] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        if(emptyFields(userInfo) || fieldsNotMatch(userInfo)){
            setError("Please enter valid credentials");
        } else {
            if(userInfo.user !== credentials.user) {
                setError("Please enter valid user");
            } else if(userInfo.password !== credentials.password) {
                setError("Please enter valid password");
            } else {
                setUserInfo({
                    user: userInfo.user,
                    password: userInfo.password
                })
                localStorage.setItem("userInfo", JSON.stringify(userInfo));
                navigate('../dashboard');
            }
        }
    }    

    function emptyFields(details): boolean {
        return details.user === "" && details.password === "";
    }
    
    function fieldsNotMatch(details): boolean {
        return details.user !== credentials.user && details.password !== credentials.password;
    }

    function hint() {
        modalState ? setModalState(false) : setModalState(true)
    }
    
    return (
        <div className="container">
            <nav className="text-end pt-3">
                <a href="/" className="link text-uppercase px-3 text-white">Home</a>
                <span className="link text-uppercase px-3 fw-bold text-white">Log In</span>
            </nav>
            <div className="d-flex justify-content-evenly align-items-center all-page">
                <form onSubmit={submitHandler} className="loginPanel">
                    <p className="label">User</p>
                    <input type="text" name="text" id="text" className="loginInput" value={userInfo.user} onChange={e => setUserInfo({...userInfo, user: e.target.value})}/>
                    <p className="label">Password</p>
                    <input type="password" name="password" id="password" className="loginInput" value={userInfo.password} onChange={e => setUserInfo({...userInfo, password: e.target.value})}/>
                    <input type="submit" name="login" id="login" className="loginButton" value="Login"/>
                    <div className="d-flex flex-row align-items-center">
                        <span className="error">{error}</span>
                        <span className="hint" onClick={hint}>Hint</span>
                    </div>
                </form>
                {
                    modalState ? (
                        <div className="d-flex justify-content-evenly align-items-center modal">
                            <div  className="modalBody">
                                <div className="text-end">
                                    <button className="btn-close" onClick={hint}></button>
                                </div>
                                <h1 className="modalTitle">Hint</h1>
                                <p className="modalDescription">I'll give the user credentials just because you looks like a good person</p>
                                <p className="label">User</p>
                                <p>thebest</p>
                                <p className="label">password</p>
                                <p>teacher</p>
                                <p className="please">Please, don't tell anyone about this credentials xD</p>
                            </div>
                        </div>
                    ) : (
                        <div style={{display: 'none'}}/>
                    )
                }
            </div>
        </div>
    )
}

export default Login