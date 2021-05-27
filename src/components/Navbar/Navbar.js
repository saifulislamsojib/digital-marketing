import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const navbarData= [
    {
        title: 'About',
        path: '/about',
    },
    {
        title: 'Team',
        path: '/team',
    },
    {
        title: 'Pricing',
        path: '/pricing',
    },
    {
        title: 'Issues',
        path: '/issues',
    },
    {
        title: 'Sign In',
        path: '/signIn',
    }
]

const Navbar = () => {

    const [search, setSearch] = useState('');

    const [toggler, setToggler] = useState(false);

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);
        setSearch('');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <button onClick={()=> setToggler(!toggler)} className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`navbar-collapse ${toggler?'d-block':'d-none'}`} id="navbarSupportedContent">
            <div className='d-lg-flex ms-auto justify-content-between navbar-contain'>
            <ul className="navbar-nav mb-2 mb-lg-0">
                {
                    navbarData.map(({title, path}) => (
                        <li key={path} className="nav-item mx-lg-2">
                            <Link to={path} className="nav-link text-white link">{title}</Link>
                        </li>
                    ))
                }
            </ul>
            <form onSubmit={handleSubmit} className="d-flex align-items-center rounded-pill get-more me-5">
                <input onChange={handleSearch} value={search} className="form-control rounded-pill bg-transparent border-0" type="search" placeholder="Get more" />
                <FontAwesomeIcon onClick={handleSubmit} icon={faSearch} className="header-icon" type='button' />
            </form>
            </div>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;