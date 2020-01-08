import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, Nav, Form } from "react-bootstrap";

class SignUpController extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      user: {
        email: "",
        password: ""
      }
    };
  }

  handleClose = () => this.setState({ showModal: false });
  handleOpen = () => this.setState({ showModal: true });

  handleChange = e => {
    const field = e.target.name;
    const user = this.state.user;
    user[field] = e.target.value;
    this.setState({ user });
  };

  onSubmit = () => {
    this.props.loginUser({ ...this.state.user });
  };
  render() {
    return (
      <>
        <Nav.Link onClick={this.handleOpen}>Sign Up</Nav.Link>

        <Modal show={this.state.showModal} onHide={this.handleOpen}>
          <Modal.Header >
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default SignUpController;
