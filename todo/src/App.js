import "./App.css";
import React from "react";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import Footer from "./Components/Footer";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      filter: "all",
 
    };
  }

  createTodo = (title) => {
    if (title.trim().length !== 0) {

      this.setState({
        todos: [...this.state.todos, { id: Date.now(), title, completed: false }],
      });
    }
  };
  onItemDeleted = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.slice(0, id),
        ...this.state.todos.slice(id + 1),
      ],
    });
  };

  toggleTodo = (id) => {
    // const todos = this.state.todos.map((item) =>
    //   item.id === id ? { ...item, completed: !item.completed } : item
    //   );
    this.setState({
      todos: this.state.todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      ),
    });
    console.log(this.state);
  };

  onFilterChange = (name) => {
    if (this.state.filter !== name) {
      this.setState({
        filter: name,
      });
    }
  };
  filter = (items, filter) => {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter(({ completed }) => !completed);
      case "completed":
        return items.filter(({ completed }) => completed);
      default:
        return items;
    }
  };

  getIsAllItemsSelected = (todos) => {
    console.log(todos.every(({completed}) => completed))
    return todos.every(({completed}) => completed)
  }

  toggleAll = () => {
    const { todos } = this.state;

    const isAllItemsSelected = this.getIsAllItemsSelected(todos);

    this.setState({
      todos: todos.map((item) => ({
        ...item,
        completed: !isAllItemsSelected,
      })),
    });
  };

  render() {
    const { todos, filter } = this.state;
    const visibleItems = this.filter(todos, filter);
    const itemsActive = todos.filter((v) => !v.completed).length;
    console.log(this.state);
    return (
      <section className="todoapp">
        <Header createTodo={this.createTodo} />
        <TodoList
          toggleAll={this.toggleAll}
          todos={visibleItems}
          toggleTodo={this.toggleTodo}
          onItemDeleted={this.onItemDeleted}
          selectedAll={this.getIsAllItemsSelected(todos)}
        />
        {!!todos.length ? (
          <Footer
            onFilterChange={this.onFilterChange}
            filter={filter}
            itemsActive={itemsActive}
          />
        ) : null}
      </section>
    );
  }
}

export default App;
