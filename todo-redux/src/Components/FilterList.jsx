import React, { Component } from "react";
import { connect } from "react-redux";
import { Filter } from "../utils/filter";
import { updateFilter } from "../store/actions";

const FilterList = ({ updateFilter, filter }) => {
  const buttons = [
    { id: Filter.all, value: "All" },
    { id: Filter.active, value: "Active" },
    { id: Filter.completed, value: "Completed" },
  ];
  const btnList = () => {
    const isActiveBtn = filter;
    return buttons.map(({ id, value }, idx) => {
      console.log(isActiveBtn);
      console.log(id, value);
      return (
        <li key={idx}>
          <a
            className={isActiveBtn === id ? "selected" : ""}
            onClick={() => updateFilter(id)}
          >
            {value}
          </a>
        </li>
      );
    });
  };

  return <ul className="filters">{btnList()}</ul>;
};

const mapStateToProps = (state) => ({
  filter: state.filter,
  todos: state.todos,
});

const mapDispatchToProps = {
  updateFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterList);
