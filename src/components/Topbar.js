import Logo from "./Logo.js"
import React, { Component } from 'react';
import '../styles/topbar.css';


class Topbar extends Component {

    render() {
        return (
            <div className="Topbar">
                <Logo />
            </div>
        )
    }
}

export default Topbar;