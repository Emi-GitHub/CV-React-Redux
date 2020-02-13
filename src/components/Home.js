import React, { Component } from 'react';
import Menu from './Menu';
import '../Style/Style.css';
import '../Style/Home.css';

class Home extends Component {
    state= {
        theme: "background-white", 
        name: "snow"
    }
    darkTheme = () => {
        this.setState({
            theme: "background-black",
            name: "black"
        })
    }
    lightTheme = () => {
        this.setState({
            theme: "background-white",
            name: "snow"
        })
    }
    render() {
        return (
            <div className="background">
                <Menu theme={this.state.theme}/>
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
                    <div className="name" style={{color:this.state.name}}>Emina Mehic</div>
                </div>
            </div>
        )
    }
}

export default Home;
