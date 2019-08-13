import React from 'react';
import { ThemeProvider } from 'styled-components'
import { Link } from 'react-router-dom'

import Paragraph from '../paragraph'
import CardTitle from './cardTitle'

const theme = {
    font: 'Work Sans',
    fontTwo: 'Montserrat',
    primaryFont: true
}

class Card extends React.Component{
    render(){
        return(
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Products" />
                    </figure>
                </div>
                <div className="card-content">
                <div className="content">
                    <CardTitle>Product Title</CardTitle>
                    <ThemeProvider theme={theme}>
                        <Paragraph className="center">KSH 2000</Paragraph>
                    </ThemeProvider>
                    <Link to="" className="button-card-center button">Order Now</Link>
                </div>
                </div>
            </div>
        )
    }
}

export default Card;