import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";

function Counter() {
  // [0] => state murni
  // [1] => manipulasi state
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  // component didMount
  useEffect(() => {
    console.log("Component DidMount...");
  }, []);
  // component didUpdate
  useEffect(() => {
    console.log("Component DidUpdate...");
  }, [count]);
  // component willUnMount
  useEffect(() => {
    return console.log("Component willUnMount...");
  }, []);

  return (
    <>
      <Container className="text-center">
        <h2>Counter App Using Functional</h2>
        <h3>{count}</h3>
        <Button variant="primary">-</Button>
        <Button variant="secondary" className="mx-2">
          RESET
        </Button>
        <Button variant="primary" onClick={increaseCounter}>
          +
        </Button>
      </Container>
    </>
  );
}

export default Counter;
