import React, { Component } from 'react'
import { connect } from 'react-redux'

class News extends Component {
    render() {
        console.log(this.props.theme)
        return (
            <div style={{ margin:"auto", width: "50%", backgroundColor:this.props.theme, color:this.props.name}}>
                <div className="my-header" style={{marginTop:"50px", fontSize:"30px"}}>Click on link bellow: <br/> <br/> <br/>
                        -> <a href="https://github.com/Emi-GitHub/News-Task1" target="_blank" rel="noopener noreferrer">News-React</a>  <br/> <br/>

                        -> <a href="https://github.com/Emi-GitHub/News-Task1" target="_blank" rel="noopener noreferrer">News-React-Redux</a> 
                        </div>
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
export default connect(mapStateToProps)(News)
