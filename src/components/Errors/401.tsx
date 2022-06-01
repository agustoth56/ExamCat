import React from 'react';

const UnauthorizedAccess = () => {
        return (
            <div className="container">
                <div>
                    <nav className="text-end pt-3">
                        <a href="/" className="link text-uppercase px-3 text-white">Home</a>
                        <a href="/login" className="link text-uppercase px-3 text-white">Log In</a>
                    </nav>
                    <div className="d-flex justify-content-evenly align-items-center all-page">
                        <div className="centerPanel text-white text-uppercase text-center d-flex align-items-center">
                            <h1 className="my-5 fw-bold">
                                Not for your eyes.
                            </h1>
                            <p className="my-2">
                                Sorry, but you are not authorized to view this page. <br />
                                Please <a href="/login" className="px-3 text-white">Login</a> to check out your permissions.
                            </p>
                            <img src={require('../../assets/401.png')} alt="" className="img-fluid w-50"/>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default UnauthorizedAccess;