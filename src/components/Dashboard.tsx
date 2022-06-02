import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { credentials } from '../data/credentials';
import UnauthorizedAccess from './Errors/401';
import axios from 'axios';

const Dashboard = () => {

    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState(() => {
        const saved = localStorage.getItem("userInfo");
        let value = saved ? JSON.parse(saved) : '';
        return value;
      });
    
    const Logout = () => {
        localStorage.setItem("userInfo", JSON.stringify({user: "", password: ""}));
        navigate('/');
    }


    const [image, setImage] = useState(
        {
            breeds: [],
            id: "MTY2NTIyMw",
            url: "https://cdn2.thecatapi.com/images/MTY2NTIyMw.jpg",
            width: 500,
            height: 333
        }
    );
    const [loading, setLoading] = useState(false)

    function getImages() {
        setLoading(true);
        axios.get(`https://api.thecatapi.com/v1/images/search`)
            .then(res => {
                const imageData = res.data;
                setImage(imageData[0]);
                setLoading(false);
                console.log(image);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            {(!userInfo || userInfo.user !== credentials.user) ? (
            <UnauthorizedAccess />
            ) : (
                <div className="container">
                    <nav className="text-end pt-3">
                        <span className="link text-uppercase px-3 text-white fw-bold">Home</span>
                        <a href="/dashboard/categories" className="link text-uppercase px-3 text-white">Categories</a>
                        <a href="/" className="link text-uppercase px-3 text-white" onClick={Logout}>Log Out</a>
                    </nav>
                    <div className="d-flex justify-content-evenly align-items-center all-page text-center">
                        <div className="w-100">
                            <h2 className="pb-3 ">Click the button below to watch a random cat picture</h2>
                            <button className="button hover-red" onClick={getImages}>Random</button>
                        </div>
                        <div className="w-100">
                            {(loading) ? (
                                <img src={require('../assets/loading.gif')} alt=""/>
                            ) : (
                                <img src={image.url} alt="" className="img-fluid"/>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;