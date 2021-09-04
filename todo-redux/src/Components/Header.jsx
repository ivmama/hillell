import React from "react"
import { addTodo } from '../store/actions';
import { connect } from 'react-redux';
class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: "",
        }
    }

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.props.addTodo(this.state.value);
            this.setState({ value: "" });
        }
    }

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    value={this.state.value}
                    onChange={(e) => this.setState({ value: e.target.value })}
                    onKeyPress={this.onKeyPress} />
            </header>
        );
    }
}


const mapStateToProps = (state) => {
    return { todos: state.todos }
}

const mapDispatchToProps = {
    addTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);