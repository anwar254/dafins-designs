import React from 'react'

import Title from './titles'
import Card from './cards/cards'
import { Link } from 'react-router-dom'

class Featured extends React.Component{
    render(){
        return(
            <div className="featured-wrapper">
                <div className="container">
                    <Title className="left title-space">Featured Products</Title>
                    <div className="columns">
                        <div className="column">
                            <Card/>
                        </div>
                        <div className="column">
                            <Card/>
                        </div>
                        <div className="column">
                            <Card/>
                        </div>
                        <div className="column">
                            <Card/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <Card/>
                        </div>
                        <div className="column">
                            <Card/>
                        </div>
                        <div className="column">
                            <Card/>
                        </div>
                        <div className="column">
                            <Card/>
                        </div>
                    </div>
                    <Link to="" className="center button-center button is-info sd-button">Explore more</Link>
                </div>
            </div>
        )
    }
}

export default Featured;