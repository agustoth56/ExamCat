import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { credentials } from '../data/credentials';
import UnauthorizedAccess from './Errors/401';

const Dashboard = () => {

    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState(() => {
        const saved = localStorage.getItem("userInfo");
        let value = saved ? JSON.parse(saved) : '';
        console.log(value);
        return value;
      });

    const Logout = () => {
        localStorage.setItem("userInfo", JSON.stringify({user: "", password: ""}));
        navigate('/');
    }

    return (
        <div>
            {(!userInfo || userInfo.user !== credentials.user) ? (
            <UnauthorizedAccess />
            ) : (
                <div className="container">
                    <nav className="text-end pt-3">
                        <a href="/" className="link text-uppercase px-3 text-white" onClick={Logout}>Log Out</a>
                    </nav>
                    <div className="all-page">
                        BIENVENIDO
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;