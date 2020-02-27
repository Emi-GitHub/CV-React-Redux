import React, { Component } from 'react';
import './Music.css';
import { connect } from 'react-redux';

class SearchBar extends Component {
    state = { 
        term: ''
    }
    onInputChange = event => {
        this.setState({
            term: event.target.value
        })
    }
    onSubmit = event => {
        event.preventDefault();
        this.props.onInputSearch(this.state.term)
    }
    render() {
        return ( 
            <div className="main-div" style={{backgroundColor:this.props.theme}}>
                <form onSubmit={this.onSubmit}>
                    <i className="music icon music-icon" style={{color:this.props.dot}}></i>
                    <div className="ui icon input input-div">
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                            placeholder="Search for song"
                            className="ui fluid action input search-input"
                        />
                        <i className="search icon"></i>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        theme: state.theme,
        dot: state.dot
    }
}

export default connect(mapStateToProps)(SearchBar);

