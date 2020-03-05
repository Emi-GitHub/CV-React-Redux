import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSideDrawerBack } from '../actions';
import '../Style/MenuMobile.css';

class BackDrop extends Component {
    render() {
        return (
            <div className="backdrop" onClick={()=>this.props.setSideDrawerBack()}/>
        )
    }
}
const mapStateToProps = state => {
    return {
        sideDrawerOpen: state.sideDrawerOpen
    }
}
export default connect(mapStateToProps, {setSideDrawerBack})(BackDrop);
