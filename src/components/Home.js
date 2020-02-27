import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import { setTheme } from '../actions';
import { setName } from '../actions';
import { setDot } from '../actions';
import { setBackground } from '../actions';
import '../Style/Home.css';

class Home extends Component {
    lightTheme = () => {
        this.props.setTheme('background-white');
        this.props.setName('black');
        this.props.setDot('rgba(218, 173, 173, 0.31)');
        this.props.setBackground('whitesmoke');
    }
    darkTheme = () => {
        this.props.setTheme('background-black');
        this.props.setName('snow');
        this.props.setDot('#BC8F8F');
        this.props.setBackground('black');
    }
    render() {
        return (
            <div className="background">
                <Menu theme={this.props.theme}/>
                <div className="div-theme">
                    <div className="theme-text">You can select theme:</div>
                    <div className="ui buttons theme-button" >
                        <button className="ui button button-color" onClick={this.lightTheme}>Light</button>
                        <div className="or"></div>
                        <button className="ui button button-color" onClick={this.darkTheme}>Dark</button>
                    </div>
                </div>
                <div className="ui sizer vertical segmet" >
                    <div className="cv">CV</div>
                    <div className="name">Emina Mehic</div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        theme: state.theme
    }
}
export default connect(mapStateToProps, {setTheme, setName, setDot, setBackground})(Home);