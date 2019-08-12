import React from 'react'
import styled from 'styled-components'
import {NavLink, Link} from 'react-router-dom'

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
                                <NavLink to="" activeClassName="active" className="navbar-link">All Products</NavLink>
                                <div className="navbar-dropdown">
                                    <Link to="" className="navbar-item">About</Link>
                                    <Link to="" className="navbar-item">About</Link>
                                    <Link to="" className="navbar-item">About</Link>
                                    <Link to="" className="navbar-item">About</Link>
                                </div>
                            </div>
                            <NavLink to="/about" className="navbar-item">About</NavLink>
                            <NavLink to="/category/business-cards" className="navbar-item">Bussiness Cards</NavLink>
                            <NavLink to="/cartegory/logo-design" className="navbar-item">Logo Designs</NavLink>
                            <NavLink to="/instant-quote" className="navbar-item">Get a Quote</NavLink>
                            <NavLink to="/weddings" className="navbar-item">Wedding</NavLink>
                            <NavLink to="/contacts" className="navbar-item">Contact Us</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </MainNav>
    );
}

export default BottomNav;