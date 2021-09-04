import React, { Component } from 'react';


export default class FilterList extends Component {
    buttons = [
        { name: 'all', value: 'All' },
        { name: 'active', value: 'Active' },
        { name: 'completed', value: 'Completed' },
    ]
    btnList = () => {
        const isActiveBtn = this.props.filter;
        return this.buttons.map(({ name, value }, idx) => {

            return (
                <li key={idx}>
                    <a
                        href="#/"
                        className={isActiveBtn === name ? name + ' selected' : name}
                        onClick={() => this.props.onFilterChange(name)}
                    >{value}
                    </a>
                </li>
            )
        })
    }
    render() {
        return (
            <ul className="filters">{this.btnList()}</ul>
        )
    }
}