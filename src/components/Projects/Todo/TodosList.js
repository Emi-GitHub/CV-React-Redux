import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodosList extends Component {
    render() {
        if(this.props.todos.length === 0) {
            return <div style={{color:this.props.name}}>You should add some todo's</div>
        }
        const todos = this.props.todos.map(todo => {
            return(
                <div className="ui segment">
                    <div className="ui segment" key={todo.id}>
                        <span>{todo.content}</span>
                    </div>
                    <button className="ui button" onClick={()=>{this.props.deleteTodo(todo.id)}}>Delete</button>
                </div>
            )
        })
        return(
            <div className="ui segment todos-div" style={{backgroundColor:this.props.dot}}>
                {todos}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        dot: state.dot,
        name: state.name,
    }
}
export default connect(mapStateToProps)(TodosList);

