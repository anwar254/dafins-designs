import React from 'react'
import styled from 'styled-components';

import Paragraph from './paragraph';
import {Link} from 'react-router-dom'

const FooterWrapper = styled.div`
    background-color: #160f30;
    padding: 50px 20px;
    margin-top: 30px;
`;

const FooterTitle = styled.h4`
    font-weight: bolder;
    color: #facd49;
`;
function Footer(){
    return(
        <FooterWrapper>
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <FooterTitle>Contact us</FooterTitle>
                        <Paragraph>Talk to us</Paragraph>
                        <Paragraph>test@test.com</Paragraph>
                    </div>
                    <div className="column">
                        <FooterTitle>About us</FooterTitle>
                        <div>
                            <Link to="">about 1</Link>
                        </div>
                        <div>
                            <Link to="">about 1</Link>
                        </div>
                        <div>
                            <Link to="">about 1</Link>
                        </div>
                        <div>
                            <Link to="">about 1</Link>
                        </div>
                    </div>
                </div>
            </div>
        </FooterWrapper>
    )
}

export default Footer;