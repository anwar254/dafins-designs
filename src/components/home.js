import React from 'react'
import styled, {ThemeProvider} from 'styled-components'

import Hero from './hero'
import Paragraph from './paragraph'
import Link from './link'

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
                    <div className="column is-three-quarters">
                        <HeroInfo >
                            <HeroTitle>Flaunt your business</HeroTitle>
                            <ThemeProvider theme={theme}>
                                <Paragraph>Order top quality business cards that are as unique as you for as low as N5,499 for a pack of 100 copies</Paragraph>
                                {/* <Link linkName="order now"/> */}
                            </ThemeProvider>
                        </HeroInfo> 
                    </div>
                    <div className="column">
                        this is the heading
                    </div>
                </div>
            </Hero>
        </div>
    )
}

export default Home;