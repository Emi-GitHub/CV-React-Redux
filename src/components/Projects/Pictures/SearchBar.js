import React, { Component } from 'react'
import { connect } from 'react-redux';

export class SearchBar extends Component {
    state = {
        term: ''
    }
    onSubmit = event => {
        event.preventDefault(); 
        this.props.onSearchSubmit(this.state.term); 
    }
    onChange = event => {
        this.setState({
            term: event.target.value
        })
    }
    render() {
        return (
            <div style={{backgroundColor:this.props.theme}}>
                <form onSubmit={this.onSubmit} className="ui form">
                    <div className="field">
                        <label style={{color:this.props.name}}>Image search</label>
                        <div className="ui input focus">
                            <input
                                type="text"
                                value={this.state.term}
                                onChange={this.onChange}
                                placeholder="Search..."
                                style={{marginBottom:"20px"}}
                            />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        theme: state.theme,
        name: state.name,
    }
}

export default connect(mapStateToProps)(SearchBar)
