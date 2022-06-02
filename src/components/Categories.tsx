import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { credentials } from '../data/credentials';
import UnauthorizedAccess from './Errors/401';
import axios from 'axios';

const Categories = () => {

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


    const [categories, setCategories] = useState([
        {
          "id": 5,
          "name": "boxes"
        },
        {
          "id": 15,
          "name": "clothes"
        },
        {
          "id": 1,
          "name": "hats"
        },
        {
          "id": 14,
          "name": "sinks"
        },
        {
          "id": 2,
          "name": "space"
        },
        {
          "id": 4,
          "name": "sunglasses"
        },
        {
          "id": 7,
          "name": "ties"
        }
      ]);
    const [category, setCategory] = useState({id: "", name: ""});
    const [images, setImages] = useState([
        {
            breeds: [],
            id: "",
            url: "",
            width: 0,
            height: 0
        }
    ]);
    const [loading, setLoading] = useState(false)



    function getImages(id, name) {
        setLoading(true);
        setCategory({id: id, name: name})
        axios.get(`https://api.thecatapi.com/v1/images/search?limit=5&category_ids=${id}`)
            .then(res => {
                const images = res.data;
                setImages(images);
                setLoading(false);
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
                        <a href="/dashboard" className="link text-uppercase px-3 text-white">Home</a>
                        <span className="link text-uppercase px-3 text-white fw-bold">Categories</span>
                        <a href="/" className="link text-uppercase px-3 text-white" onClick={Logout}>Log Out</a>
                    </nav>
                    <div className="all-page d-flex flex-column">
                        <nav className="text-center pt-5 flex-wrap">
                        {categories.map((item) => (
                            <span className="link text-uppercase px-3 text-white pointer" key={item.id} onClick={() => getImages(item.id, item.name)}>{item.name}</span>
                        ))}
                        </nav>
                        {category.name ? (
                            <div className="text-uppercase text-white text-center">
                                <h3 className="pt-5">Showing 5 images of <i>{category.name}</i></h3>
                                <p>Click <strong>{category.name}</strong> button to refresh with more images.</p>
                            </div>
                        ) : (
                            <h3 className="text-uppercase pt-5 text-white text-center">Select any category</h3>
                        )}
                        <div className="d-flex justify-content-center align-items-center flex-wrap flex-row">
                            {(loading) ? (
                                <img src={require('../assets/loading.gif')} alt=""/>
                            ) : (
                                images.map((item) => (
                                    <img src={item.url} alt="" key={item.id} className="img-fluid mx-5 my-5 imagen"/>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Categories;