import React, { Component } from "react";
import FormInput from "../form-input";
import * as _ from "lodash";
import "./form.scss";

const isRequire = (value) => {
    return !value || value.toString().trim().length === 0;
};
const checkDisabled = (formValues) => {
    return Object.keys(formValues)
        .filter((key) => key !== "id")
        .some((key) => formValues[key].isError);
};
const convertInitialState = (values) => {
    return Object.entries(values).reduce(
        (acc, [key, value]) => {
            return { ...acc, [key]: { value: value, isError: isRequire(value) } };
        },
        {}
    );
};

const convertFormValues = (formValues) => {
    return Object.entries(formValues).reduce((acc, [key, { value }]) => {
        acc[key] = value;
        return acc;
    }, {});
}
const initialFormValues = {
    id: '',
    name: '',
    email: '',
    phone: ''
}

export default class Form extends Component {
    state = {
        formValues: convertInitialState(initialFormValues),
        disabled: true,
    };

    onValueChange = (keyValue, value) => {
        const newFormValues = {
            ...this.state.formValues,
            [keyValue]: { value, isError: isRequire(value) },
        };

        this.setState({
            formValues: newFormValues,
            disabled: checkDisabled(newFormValues),
        });
    };

    componentDidMount() {
        const newFormValues = convertInitialState(initialFormValues);
        this.setState({
            formValues: newFormValues,
            disabled: checkDisabled(newFormValues),
        });
    }
    // disabled = true;

    componentDidUpdate(prevProps, prevState) {
        if (!_.isEqual(prevProps.initialValues, this.props.initialValues)) {
            console.log("Update")
            let newFormValues;
            if (Object.keys(this.props.initialValues).length) {
                newFormValues = convertInitialState(this.props.initialValues);
            }
            else {
                newFormValues = convertInitialState(initialFormValues);
            }
            console.log("newFormValues", newFormValues)
            
            this.setState({
                formValues: newFormValues,
                disabled: checkDisabled(newFormValues),
            });
        }
    }
    formReset() {
        const newFormValues = convertInitialState(initialFormValues)
        this.setState({
            formValues: newFormValues,
            disabled: checkDisabled(newFormValues),
        })
       
    }

    componentWillUnmount() {
        console.log("unpount")
    }


    render() {
        const { onUploadItem, onUploadCancel } = this.props;
        console.log()
        const { formValues, disabled } = this.state;
        console.log(this.state)
        
        return (
            <form
                className="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    onUploadItem(convertFormValues(formValues));
                    this.formReset()
                }
                }>
                {Object.entries(formValues).map(
                    ([keyValue, { value, isError }], idx) => {
                        if (keyValue !== "id") {
                            return (
                                <FormInput
                                    value={value}
                                    key={idx}
                                    keyValue={keyValue}
                                    onValueChange={this.onValueChange}
                                    isError={isError}
                                />
                            );
                        }
                    }
                )}
                <div className="form-box">
                    <button
                        type="submit"
                        disabled={disabled}
                    >
                        {formValues.id.value ?  "UPDATE" : "ADD NEW"}
                    </button>
                    <button type="reset" onClick={(e) => { this.formReset(); onUploadCancel()}}>CANCEL</button>
                </div>
            </form>
        );
    }
}
