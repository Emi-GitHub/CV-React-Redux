import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Yelp.css';

class Yelp extends Component {
    render() {
        return (
            <div className={this.props.theme} style={{color:this.props.name}}>
                <div className="news">
                    <div>
                        {this.props.language==='english' ? "Click on link bellow:  " : "Klikni na link ispod:"}
                        <br/> <br/> <br/>
                        <div>
                            ->
                            <a 
                                href="https://github.com/Emi-GitHub/Yelp" 
                                target="_blank" rel="noopener noreferrer"
                            >
                                Yelp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        theme: state.theme,
        name: state.name,
        language: state.language
    }
}
export default connect(mapStateToProps)(Yelp);
