import React, { Component } from 'react';
import TodosList from './TodosList';
import AddTodo from './AddTodo';
import './Todo.css';
import { connect } from 'react-redux';

export class Todo extends Component {
    state = {
        todos: []
    }
    deleteTodo = id => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        })
        this.setState({
            todos:todos
        })
    }
    addTodo = todo => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({
            todos: todos
        })
    }
    render(){
        return (
            <div className="todo-div" style={{backgroundColor:this.props.theme}}>
                <div className="main-div">
                    <div className="my-header todo-link" style={{color:this.props.name}}>
                        To see code click on link: 
                        <a href="https://github.com/Emi-GitHub/MyApp-React/tree/todo"> Add todo's</a> 
                        <br/> <br/>
                    </div>
                </div>
                <div className="ui container">
                    <div className="ui divider"></div>
                    <h1 className="todo-header"  style={{color:this.props.name}}>Todo's</h1>
                    <h3 className="add-todo"  style={{color:this.props.name}}>Add new Todo's:</h3>
                    <AddTodo addTodo={this.addTodo}/>
                    <TodosList todos={this.state.todos} deleteTodo={this.deleteTodo}/>
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
export default connect(mapStateToProps)(Todo);
