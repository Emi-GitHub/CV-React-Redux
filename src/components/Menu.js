import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Style/Menu.css';

class Menu extends Component {
    render() {
        return (
            <div className="ui text menu menu-div">
                <div className="right menu menu-style">
                    <Link to={{pathname:"/", state: {theme: this.props.theme} }} 
                        className="active item my-menu">
                            Home
                    </Link>
                    <Link to={{pathname:"/about", state: {theme: this.props.theme} }} 
                        className="item my-menu">
                            About
                    </Link>
                    <Link to={{pathname:"/resume", state: {theme: this.props.theme} }} 
                        className="item my-menu">
                            Resume
                    </Link>
                    <Link to={{pathname:"/projects", state: {theme: this.props.theme} }} 
                        className="item my-menu">
                            Projects
                    </Link>
                    <Link to={{pathname:"/contact", state: {theme: this.props.theme} }} 
                        className="item my-menu">
                            Contact
                    </Link>
                </div>
            </div>
        )
    }
}

export default Menu;
