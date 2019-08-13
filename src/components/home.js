import React from 'react'
import styled, {ThemeProvider} from 'styled-components'

import Hero from './hero'
import Paragraph from './paragraph'
import InfoService from './infoService'
import { Link } from 'react-router-dom';

const HeroInfo = styled.div`
    padding: 10px;
`;
const HeroTitle = styled.h1`
    color: #5d50c6;
    font-size: 74px;
    font-weight: bolder;
`;

const theme = {
    font: 'Work Sans',
    fontTwo: 'Montserrat',
    primaryFont: true
  }

function Home(){
    return(
        <div className="home-wrapper">
            <Hero>
                <div className="columns">
                    <div className="column">
                        <HeroInfo >
                            <HeroTitle>Flaunt your business</HeroTitle>
                            <ThemeProvider theme={theme}>
                                <Paragraph>Order top quality business cards that are as unique as you for as low as $$$$$ for a pack of 100 copies</Paragraph>
                            </ThemeProvider>
                            <Link to="" className="button is-info sd-button">Order Now</Link>
                        </HeroInfo> 
                    </div>
                    <div className="column">
                        Image should be here
                    </div>
                </div>
            </Hero>

            <section>
                <InfoService/>
            </section>
        </div>
    )
}

export default Home;