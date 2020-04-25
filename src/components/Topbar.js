import Logo from "./Logo.js"
import React, { Component } from 'react';
import '../styles/topbar.css';


class Topbar extends Component {

    render() {
        return (
            <div className="Topbar">
                <row >
                    <Logo />
                </row>
            </div>
        )
    }
}

export default Topbar;