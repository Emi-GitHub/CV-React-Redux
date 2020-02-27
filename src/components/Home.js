import React, { Component } from 'react';
import Menu from './Menu';
import '../Style/Style.css';
import '../Style/Home.css';
import { connect } from 'react-redux';
import { setTheme } from '../actions';
import { setName } from '../actions';
import { setDot } from '../actions';

class Home extends Component {
   
    lightTheme = () => {
        this.props.setTheme('background-white');
        this.props.setName('black');
        this.props.setDot('rgba(218, 173, 173, 0.31)');
    }
    darkTheme = () => {
        this.props.setTheme('background-black');
        this.props.setName('snow');
        this.props.setDot('#BC8F8F');
    }
    render() {
        console.log(this.props.dot)
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
                    <div className="name" style={{color:"snow"}}>Emina Mehic</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        theme: state.theme,
        name: state.name,
        dot: state.dot
    }
}
export default connect(mapStateToProps, {setTheme, setName, setDot})(Home);
