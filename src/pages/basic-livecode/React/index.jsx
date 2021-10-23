import React, { Component } from "react";
import Navbar from "../../../components/livecode-Navbar";
import { Button, Modal } from "react-bootstrap";
import CardMovie from "../../../components/Card";

class BasicReact extends Component {
  constructor() {
    super();
    // console.log("Constructor Is Running...");
    this.state = {
      name: "Rino Satya Putra",
      data: [],
      search: "",
      show: false
    };
    this.handleClick3 = this.handleClick3.bind(this);
  }

  // LifeCycle
  componentDidMount() {
    //ketika component nya di render ke dom
    // console.log("componentDidMount Is Running...");
    // Process: Fetching Data / API
    this.setState({
      data: [{ movieName: "Spiderman" }, { movieName: "Batman" }, { movieName: "IronMan" }]
    });
  }

  componentDidUpdate() {
    // ketika component atau data nya ada perubahan akan terupdate dari dom
    // console.log("componentDidUpdate Is Running...");
    // this.setState({
    //   name: "Senju Kawaragi"
    // });
  }
  componentWillUnmount() {
    // console.log("componentWillUnMount Is Running...");
  }

  handleClick = () => {
    console.log("Click !");
  };
  handleClick2 = (data) => {
    console.log("Click with data + ", +data);
  };

  handleClick3() {
    console.log(this);
    console.log("Click 3!");
  }

  changeText = (event) => {
    console.log(event);
    console.log(event.target.value);
    this.setState({
      search: event.target.value
    });
  };

  handleSearch = (event) => {
    if (event.key === "Enter") {
      console.log("User Press Enter...");
      this.setState({
        search: event.target.value
      });
    }
  };

  handleShow = () => this.setState({ show: true });
  handleClose = () => this.setState({ show: false });
  handleUpdateMovie = (data) => {
    console.log("Movie is update...", data);
  };
  render() {
    // console.log("Render Jsx Is Running...");
    // console.log(this.state.data);
    return (
      <>
        <h1>Basic React!</h1>
        <Navbar data="Rino SP" />
        <hr />
        <h1>{this.state.name}</h1>

        {/* Mapping Data */}
        {this.state.data.map((item, idx) => (
          <h2 key={idx}>{item.movieName}</h2>
        ))}

        {/* Event */}
        <button onClick={this.handleClick}>Click Me 1</button>
        <button onClick={() => this.handleClick2(1)}>Click Me 2</button>
        <button onClick={this.handleClick3}>Click Me 3</button>
        <hr />
        <input
          type="text"
          placeholder="Search..."
          name="search"
          onChange={(event) => this.changeText(event)}
        />
        {/* OnChange akan berjalan ketika user memasukan nilai ke form input */}
        <input type="text" placeholder="Search..." name="search" onKeyPress={this.handleSearch} />
        <hr />
        {/* <h3>Keyword: {this.state.search}</h3> */}
        {/* Conditional Rendering */}
        {/* Short Logic */}
        {this.state.search && <h3>Keyword: {this.state.search}</h3>}
        <hr />
        {/* Ternary Operator */}
        {this.state.data.length > 0 ? (
          this.state.data.map((value, idx) => <h4 key={idx}>{value.movieName}</h4>)
        ) : (
          <p>Data Not Found</p>
        )}
        <hr />
        {/* Bootstrap */}
        <button className="btn btn-danger">Click me please!</button>
        <Button variant="danger">Click me please!</Button>
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <hr />
        {/* Component Comunication */}
        {/* <CardMovie /> */}
      </>
    );
  }
}

export default BasicReact;
