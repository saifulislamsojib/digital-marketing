import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Img from '../../images/header.svg';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <div className="container-fluid">
            <div className="row d-flex align-items-center mx-auto">
                <div className="col-md-3">
                    <h1 className="heading">Digital</h1>
                    <h1 className="heading mb-5">Marketing</h1>
                    <h3 className="sub-heading">Targeted and interactive</h3>
                    <h3 className="sub-heading mb-4">Marketing of goods and services</h3>
                    <h4>Sign up and get a discount</h4>
                    <button className="primary-btn rounded-pill">
                        Sign up
                        <FontAwesomeIcon icon={faPlay} className="ms-2" />
                    </button>
                </div>
                <div className="col-md-9 mt-5 mt-md-0">
                    <img className="img-fluid w-100" src={Img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;