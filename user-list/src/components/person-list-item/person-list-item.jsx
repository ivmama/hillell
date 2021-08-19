import React, { Component } from "react";
import "./person-list-item.scss"
export default class PersonListItem extends Component {

  componentWillUnmount() {
    console.log(1)
  };

  render() {
    const { dataItem, onUpdateItem, idxItem, onDeleteItem } = this.props;
    return (<tr>
      {Object.values(dataItem).map((item, idx) => {
        if (item !== dataItem.id) {
          return <td key={idx}>{item}</td>
        }
        else {
          return <td key={idx}>{idxItem+1}</td>
        }
      })}
      <td className="action">
        <div>
          <button onClick={()=> onDeleteItem(dataItem.id)}>DELETE</button>
          <button onClick={()=> onUpdateItem(dataItem)}>UPDATE</button>
        </div>
      </td>
    </tr>);
  }
}
