import React, { Component } from 'react';
import './Youtube.css';
import { connect } from 'react-redux';

class SearchBar extends Component {
    state = { 
        term: '' 
    };
    onInputChange = event => { 
        this.setState({
            term: event.target.value
        });
    };
    onFormSubmit = event => {
        event.preventDefault(); 
        this.props.callMe(this.state.term);
    };
    render() {
        return (
            <div className="search bar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field" style={{ marginBottom:"20px"}}>
                        <label style={{color:this.props.name}}>Video search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                            placeholder="Search for video"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        name: state.name,
    }
}

export default connect(mapStateToProps)(SearchBar);
