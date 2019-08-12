import React from 'react'

import Parapraph from './paragraph'
import Link from './link'
import '../Style.css'

import styled, {ThemeProvider} from 'styled-components'

const Navbar = styled.div`
    background-color: #5d50c6;
    color: #fff;
`;

const NavFlex = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justyfy-content: space-between;
    width: 100%;
`;

const NavLeft = styled.div`
    display: flex;
    align-self: flex-start;
    padding: 7px;
    color: #fff;
`;
const NavRight = styled.div`
    display: flex;
    align-self: flex-end;
    padding: 7px;
    color: #fff;
`;

const Inp = styled.input`
    background: transparent!important;
    border: none;
    border-radius: 0;
    font-family: ${props => props.theme.font};
    box-shadow: 0 0 0 transparent;
    color: #fff!important;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: #fff;
    }
    &:-ms-input-placeholder {
        color: #fff
    }
    &::-ms-input-placeholder{
        color: #fff;
    }
`;

const theme = {
    font: 'Work Sans',
    fontTwo: 'Montserrat',
    primaryFont: true
  }
function TopNav() {
    const linkStyle = {
        color: '#fff'
    }
    return (
      <ThemeProvider theme={theme}>
          <Navbar>
            <NavFlex>
                <NavLeft style={{flexGrow: 200}}>
                    <NavLeft style={{alignSelf: 'flex-start', width: '800px'}}>
                        <Parapraph>24/7 support : <b>0712-345-678</b></Parapraph>
                    </NavLeft>
                    <NavRight  style={{alignSelf: 'flex-end'}}>
                        <NavLeft style={{padding: 0, width: "100px", color: "#fff"}}>
                            <Link style={linkStyle} hasIcon icon="fas fa-user" linkName="Account" link="#"/>
                        </NavLeft>
                        <NavRight style={{padding: 0, flexGrow: 2}}>
                            <Link style={linkStyle} hasIcon icon="fas fa-shopping-cart" color='#fff' linkName="Cart" link="#"/>
                        </NavRight>
                    </NavRight>
                </NavLeft>
                <NavRight style={{flexGrow: 0.5, backgroundColor: '#4f43af'}}>
                    <div className="field">
                        <p className="control has-icons-left">
                        <Inp className="input" placeholder="Search"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-search"></i>
                        </span>
                        </p>
                    </div>
                </NavRight>
            </NavFlex>
        </Navbar>
      </ThemeProvider>
    );
  }
  
  export default TopNav;