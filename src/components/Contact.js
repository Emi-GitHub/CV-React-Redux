import React, { Component } from 'react'
import Menu from './Menu'
import '../Style/Style.css'

export class Contact extends Component {
    render() {
        return (
            <div className={this.props.location.state.theme} style={{height: "1000px"}} >
                <Menu theme={this.props.location.state.theme}/>
				<div className="theme-menu">
					<div className="theme-text">Contact</div>
				</div>
            </div>
        )
    }
}

export default Contact
