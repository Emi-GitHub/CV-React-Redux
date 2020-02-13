import React, { Component } from 'react';
import Menu from './Menu';
import '../Style/Style.css';

class About extends Component {
    render() {
        return (
            <div className={this.props.location.state.theme} >
                <Menu theme={this.props.location.state.theme}/>
				<div className="theme-menu">
					<div className="theme-text">About me</div>
				</div>
            </div>
        )
    }
}

export default About;
