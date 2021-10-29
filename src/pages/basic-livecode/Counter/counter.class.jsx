import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
// import { increaseCounter } from "../../../store-livecode/actions/counter";
export class CounterClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  increaseCounter = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decreaseCounter = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  componentDidMount() {
    console.log("ComponentDidMount is Runinng...");
    console.log(this.props.counter);
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate is Runinng...");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount is Runinng...");
  }

  resetCounter = () => {
    this.setState({
      count: 0
    });
  };
  render() {
    const { count } = this.props.counter;
    return (
      <>
        <Container className="text-center">
          <h2>Counter App Using Class</h2>
          <h3>{count}</h3>
          <Button variant="primary" onClick={this.decreaseCounter}>
            -
          </Button>
          <Button variant="secondary" className="mx-2" onClick={this.resetCounter}>
            RESET
          </Button>

          <Button variant="primary" onClick={this.props.increaseCounter}>
            +
          </Button>
        </Container>
      </>
    );
  }
}

// const mapStateToProps = (state) => ({
//   counter: state.counter
// });

// const mapDispatchToProps = {
//   increaseCounter
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);

export default CounterClass;
