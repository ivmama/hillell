// import React, { Component } from 'react';
import FilterList from './FilterList';
import { connect } from "react-redux";
import {clearAll} from '../store/actions/index.js'
const Footer = ({ todos, clearAll }) => {
    console.log(todos)
    const isSomeItemCompleted = (todos) => {

        if (todos.length > 0 && todos.some((item) => item.completed)) {
            return { display: "block" }
        }
        else return { display: "none" }

    }
    // console.log(isSomeItemCompleted())
    return (
        <footer className="footer" style={{ display: "block" }}>
            {console.log(1)}
            <span className="todo-count"><strong>{todos.length}</strong> items left</span>
            <FilterList />
            <button className="clear-completed" style={isSomeItemCompleted(todos)} onClick={()=> clearAll()}>Clear completed</button>
        </footer>
    )

}

const mapStateToProps = (state) => {
    return { todos: state.todos };
};
const mapDispatchToProps = {
    clearAll
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
