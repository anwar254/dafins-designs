import React from 'react'

function Hero(props){
    return(
        <div className="hero-wrapper">
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}

export default Hero;