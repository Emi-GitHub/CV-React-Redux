import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { setSideDrawerBack } from '../actions';
import '../Style/MenuMobile.css';

class MenuMobile extends Component {
    render() {
        return (
            <nav className='side-drawer' onClick={()=>this.props.setSideDrawerBack()}>
                <ul>
                    <li><Link to="/" className="link">Home</Link></li> <br/>
                    <li><Link to="/about" className="link">About</Link></li> <br/>
                    <li><Link to="/resume" className="link">Resume</Link></li> <br/>
                    <li><Link to="/projects" className="link">Projects</Link></li> <br/>
                    <li><Link to="/contact" className="link">Contact</Link></li> <br/>
                </ul>
            </nav>
        )
    }
}
const mapStateToProps = state => {
    return {
        sideDrawerOpen: state.sideDrawerOpen,
        theme: state.theme
    }
}
export default connect(mapStateToProps,{setSideDrawerBack})(MenuMobile);
