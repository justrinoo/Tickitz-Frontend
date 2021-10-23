import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
class CardMovie extends Component {
  handleSetUpdate = () => {
    this.props.handleUpdate(1);
  };
  render() {
    const { id, title, category, image } = this.props.data;
    return (
      <>
        <Card>
          <Card.Img
            variant="top"
            src={
              image
                ? `http://localhost:3001/uploads/movie/${image}`
                : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
            }
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{category}</Card.Text>
            <Button variant="primary" onClick={() => this.props.handleDetail(id)}>
              Details
            </Button>
            <Button variant="secondary" onClick={() => this.props.handleUpdate(1)}>
              Update
            </Button>
            {/* <Button variant="secondary" onClick={this.handleSetUpdate}>
              Update
            </Button> */}
            <Button variant="danger">Delete</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default CardMovie;
