import React, { Component } from "react";
import PersonListItem from "../person-list-item";
import "./person-list.scss";
export default class PersonList extends Component {




  render() {
    const { personList, onUpdateItem, onDeleteItem } = this.props;

    return (
      <table className="person-list">
        <thead>
          <tr>
            <td>№</td>
            <td>name</td>
            <td>email</td>
            <td>phone</td>

            {/* {     
            Object.keys(personList[0]).map((value, idx) => {
              if (value !== "id") {
                return <td key={idx}>{value}</td>;
              }
              else {
                return <td key={idx}>№</td>
              }
            })} */}
            <td>ACTION</td>
          </tr>
        </thead>
        <tbody>
          {personList.map((item, idx) => {
            return <PersonListItem
              key={idx}
              idxItem={idx}
              dataItem={item}
              onUpdateItem={onUpdateItem}
              onDeleteItem={onDeleteItem}
            />;
          })}
        </tbody>
      </table>
    );
  }
}
