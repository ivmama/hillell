import React, { Component } from "react";
import "./form-input.scss";
export default class FormInput extends Component {



    render() {
        const { keyValue, value, onValueChange, onCheckDisabled, } = this.props;
        return (
            <div className="form-input-block">
                <label htmlFor={keyValue}>User {keyValue}</label>
                <input
                    type={keyValue === "email" ? "email" : "text"}
                    placeholder={keyValue}
                    value={value}
                    name={keyValue}
                    onChange={(e) => {
                        onValueChange(keyValue, e.target.value);
                    }}
                ></input>
            </div>

        );
    }
}
