import React, { Component } from "react";
import Service from "../../service";
import PersonList from "../person-list";
import Loader from "../loader";
import ErrorIndicator from "../error-indicator";
import Form from "../form";
import "./app.scss";


const { removePeople, getAllPeople, updatePeople, addPeople } = new Service();

export default class App extends Component {




  state = {
    data: [],
    isLoading: true,
    isError: false,

    initialValues: {},
  };


  componentDidMount() {
    // const {  } = this.service;

    getAllPeople()
      .then((data) => {
        this.setState({
          data,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          error: true,
        });
      });
  }

  onUpdateItem = (item) => {

    this.setState({
      initialValues: item,
    });

  };
  onUploadItem = (formValues) => {
    const { data } = this.state;
    let findItem = data.find((v) => v.id === formValues.id);
    this.setState({
      isLoading: true,
    })
    if (findItem) {
      updatePeople().then((res) => {
        console.log(res);
        this.setState({
          initialValues: {},
          isLoading: false,
          data: data.map((v) => {
            return v.id === findItem.id ? formValues : v;
          }),
        });
      }).catch((error) => {
        this.setState({
          isLoading: false,
          error: true,
        });
      });

    }
    else {
      formValues.id = data.length + 1
      addPeople(formValues).then((res) => {
        this.setState({
          data: [...data, formValues],
          isLoading: false,
        });
      })
        .catch((error) => {
          this.setState({
            isLoading: false,
            error: true,
          });
        });
    }



  };

  onUploadCancel = () => {
    this.setState({
      initialValues: {},
    });
  }
  onDeleteItem = (id) => {
    this.setState({
      isLoading: true,
    })

    removePeople({ userId: id }).then((res) => {
      console.log(res);
      const { data, initialValues } = this.state;
      this.setState({
        isLoading: false,
        initialValues: initialValues.id === id ? {} : initialValues,
        data: data.filter((v) => v.id !== id)
      })
    }).catch((error) => {
      this.setState({
        isLoading: false,
        error: true,
      });
    });

  }

  render() {
    const { data, isLoading, isError, activeItem, initialValues } = this.state;
    if (isError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="app">
        <div className="list-wrapper">
        {isLoading ? (
          <Loader />
        ) : (
          <PersonList
            personList={data}
            onUpdateItem={this.onUpdateItem}
            onDeleteItem={this.onDeleteItem} />
        )}
        </div>

        <Form
          activeItem={activeItem}
          onValueChange={this.onValueChange}
          onUploadItem={this.onUploadItem}
          initialValues={initialValues}
          onUploadCancel={this.onUploadCancel}
        />
      </div>
    );
  }
}
