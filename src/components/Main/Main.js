import React from 'react';
import Img from '../../images/main.svg';

const Main = () => {
    return (
        <main className="mb-5 pb-5">
            <div style={{width: '95%'}} className="row container-fluid mx-auto d-flex align-items-center">
                <div className="col-md-6">
                    <img className="img-fluid w-100" src={Img} alt="" />
                </div>
                <div className="col-md-6 mt-5 mt-md-0">
                    <h1>Design and strategy</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ex quaerat eum officiis expedita molestias similique, illum facere, esse labore tenetur nisi incidunt assumenda, quibusdam iure dolorem optio nam ducimus!</p>
                    <h1 className="mt-5">Digital Marketing Channels</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ex quaerat eum officiis expedita molestias similique, illum facere, esse labore tenetur nisi incidunt assumenda, quibusdam iure dolorem optio nam ducimus!</p>
                </div>
            </div>
        </main>
    );
};

export default Main;