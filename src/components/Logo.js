import React from 'react';
import logo from '../assets/brand_white.png'

class Logo extends React.Component {
    render() {
        return (
            <div>
                <img
                    width="400"
                    height="400"
                    src={logo}
                    alt="Veritas' logo"></img>
            </div>
        );
    }
}

export default Logo;