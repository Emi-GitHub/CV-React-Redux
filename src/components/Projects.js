import React, { Component } from 'react'
import Menu from './Menu'
import '../Style/Style.css';

export class Projects extends Component {
    render() {
        return (
            <div className={this.props.location.state.theme} style={{height: "1000px"}} >
                <Menu theme={this.props.location.state.theme}/>
				<div className="theme-menu">
					<div className="theme-text">Projects</div>
				</div>
            </div>
        )
    }
}

export default Projects
