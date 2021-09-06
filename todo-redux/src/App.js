import "./App.css";
import React from "react";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import Footer from "./Components/Footer";

const App = () => {


  const getIsAllItemsSelected = (todos) => {
    return todos.every(({ completed }) => completed);
  };

  // const toggleAll = () => {
  //   // const { todos } = this.state;

  //   const isAllItemsSelected = getIsAllItemsSelected(todos);

  //   this.setState({
  //     todos: todos.map((item) => ({
  //       ...item,
  //       completed: !isAllItemsSelected,
  //     })),
  //   });
  // };

  // const { todos, filter } = this.state;
  // const visibleItems = this.filter(todos, filter);
  // const itemsActive = todos.filter((v) => !v.completed).length;
  return (
    <section className="todoapp">
      <Header />
      <TodoList />
      <Footer />
    </section>
  );
};

export default App;
