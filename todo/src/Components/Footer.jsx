import React, { Component } from 'react';
import FilterList from './FilterList';
export default class Footer extends Component {
    render() {
        const { onFilterChange, itemsActive, filter } = this.props
        return (

            <footer className="footer" style={{ display: "block" }}>
                <span className="todo-count"><strong>{itemsActive}</strong> items left</span>
                <FilterList onFilterChange={onFilterChange} filter={filter} />
                <button className="clear-completed" style={{ display: "none" }}></button>
            </footer>
        )
    }
}