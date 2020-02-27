import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Style/Menu.css';

class Menu extends Component {
    render() {
        return (
            <div className="ui text menu menu-div">
                <div className="right menu menu-style">
                    <Link to="/" className="active item my-menu">Home</Link>
                    <Link to="/about" className="item my-menu">About</Link>
                    <Link to="/resume" className="item my-menu">Resume</Link>
                    <Link to="/projects" className="item my-menu">Projects</Link>
                    <Link to="/contact" className="item my-menu">Contact</Link>
                </div>
            </div>
        )
    }
}

export default Menu;
