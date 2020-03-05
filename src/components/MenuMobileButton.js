import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSideDrawer } from '../actions';
import '../Style/MenuMobile.css';

class MenuMobileButton extends Component {
    render() {
        return (
            <button className="toggle-button" onClick={()=>this.props.setSideDrawer(this.props.sideDrawerOpen)}>
                <div className="toggle-line" />
                <div className="toggle-line" />
                <div className="toggle-line" />
            </button>
        )
    }
}

const mapStateToProps = state => {
    return {
        sideDrawerOpen: state.sideDrawerOpen
    }
}
export default connect(mapStateToProps, {setSideDrawer})(MenuMobileButton);
