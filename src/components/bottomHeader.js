import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const MainNav = styled.nav`
    background-color: #fff;
    padding: 10px;
`;

function BottomNav(){
    return(
        <MainNav>
            <div className="container isFluid">
                <div className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link className="navbar-item" to="/">
                            <img alt="Logo" src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                            <Link to="" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </Link>
                        </Link>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-end">
                            <div className="navbar-item has-dropdown is-hoverable">
                                <Link to="" className="navbar-link">All Products</Link>
                                <div className="navbar-dropdown">
                                    <Link to="/session/login" className="navbar-item">About</Link>
                                    <Link to="" className="navbar-item">About</Link>
                                    <Link to="" className="navbar-item">About</Link>
                                    <Link to="" className="navbar-item">About</Link>
                                </div>
                            </div>
                            <Link to="/" className="navbar-item">About</Link>
                            <Link to="/" className="navbar-item">About</Link>
                            <Link to="/" className="navbar-item">About</Link>
                            <Link to="/" className="navbar-item">About</Link>
                            <Link to="/" className="navbar-item">About</Link>
                        </div>
                    </div>
                </div>
            </div>
        </MainNav>
    );
}

export default BottomNav;