import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = (props) => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">The News Hour</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='vertical-line'></div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button className="nav-link active" aria-current="page" onClick={props.selectUs}>US News</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link active" aria-current="page" onClick={props.selectIn}>Indian News</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link active" aria-current="page" onClick={props.selectCanada}>Canadian News</button>
                        </li>
                        <div className='vertical-line'></div>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/General">General</Link></li>
                                <li><Link className="dropdown-item" to="/Entertainment">Entertainment</Link></li>
                                <li><Link className="dropdown-item" to="/Business">Business</Link></li>
                                <li><Link className="dropdown-item" to="/Sports">Sports</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar