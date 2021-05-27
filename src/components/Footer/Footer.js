import React from 'react';
import Img from '../../images/footer.svg';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer container-fluid'>
            <div className="row">
                <div className="col-lg-5">
                    <img className='footer-img' src={Img} alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;