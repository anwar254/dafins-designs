import React from 'react';
import styled from 'styled-components'

import Title from './titles'
import Paragraph from './paragraph'

const InfoWrapper = styled.div`
    background-color: #fff;
    padding: 30px 1px;
`;

const Icon = styled.i`
    font-size: 30px;
    text-align: center;
`;

const ServiceIcon = styled.div`
    display: flex;
    align-items:  center;
    justify-content: center;
`;

function InfoService(){
    return(
        <div className="info-service">
            <InfoWrapper>
                <div className="container">
                    <Title>We are one-stop shop for all your printing needs.</Title>
                    <Paragraph>We are Number 1 at quick and high quality prints. Be it business cards, banners, corporate gifts, wedding stationery.
    We've got you covered!</Paragraph>
                </div>
                <div className="container">
                    <div className="columns services">
                        <div className="column">
                            <ServiceIcon>
                                <Icon className="fas fa-dollar-sign"></Icon>
                            </ServiceIcon>
                            <Title>Cost</Title>
                            <Paragraph className="center">Get your cost estimated</Paragraph>
                        </div>
                        <div className="column">
                            <ServiceIcon>
                                <Icon className="fas fa-clipboard-check"></Icon>
                            </ServiceIcon>
                            <Title>Design</Title>
                            <Paragraph className="center">Request a unique design for you business</Paragraph>
                        </div>
                        <div className="column">
                            <ServiceIcon>
                                <Icon className="fas fa-truck"></Icon>
                            </ServiceIcon>
                            <Title>Contact</Title>
                            <Paragraph className="center">Contact us and get instant feedback</Paragraph>
                        </div>
                    </div>
                </div>
            </InfoWrapper>
        </div> 
    )
}

export default InfoService;