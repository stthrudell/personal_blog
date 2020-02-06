import React, { Component } from 'react';

// import { Container } from './styles';


import Logo from "../../assets/logo.png";
import './index.css'

export default class header extends Component {
  render() {
    return (
        <header>
            <nav>
                <div className="logo"><img src={Logo} alt=""/></div>
                <div className="menu">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item mx-3">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item dropdown mx-3">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Categorias
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">React Native</a>
                                        <a className="dropdown-item" href="#">NodeJS</a>
                                        <a className="dropdown-item" href="#">PHP</a>
                                    </div>
                                </li>
                            
                            </ul>
                            <form className="form-inline my-2 my-lg-0 mx-3">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>
                <div className="social-icons">icons</div>
            </nav>
        </header>
    );
  }
}
