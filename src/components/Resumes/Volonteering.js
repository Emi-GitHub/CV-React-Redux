import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../Style/Resume.css';

class Volonteering extends Component {
    render() {
        return (
            <div className="resume-section" style={{color:this.props.name}}>
                <div className="field-header">
                    {this.props.language==='english' ? "Volonteering:" : "Volontiranje:"}
                </div>
                <div className="field-year">2019</div>
                <div className="resume-notes">
                    <div className="subheader">Sarajevo Unlimited</div>
                    {this.props.language==='english' ? "( 4th regional forum on innovation, entrepreneurship )" : "( 4. regionalni forum inovacija i poduzetništva )" }
                   <br/>
                   {this.props.language==='english' ? "22-24 OCTOBER 2019" : "22-24 OKTOBAR 2019"}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        name: state.name,
        language: state.language
    }
}
export default connect(mapStateToProps)(Volonteering);
