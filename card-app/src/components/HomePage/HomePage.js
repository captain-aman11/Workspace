import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import {
  Nav,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
  Card,
} from "react-bootstrap";

function HomePage() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Cards-App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#">Saved Cards</Nav.Link>
              <Nav.Link href="#">Login</Nav.Link>
              <Nav.Link href="#">Register</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container style={{ height: "100vh" }}>
        <>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <Card style={{ width: "300px" }}>
              <Card.Img
                variant="top"
                src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                height="300px"
                width="300px"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Front-View</Card.Text>
                <Button variant="primary" onClick={handleClick}>
                  View Details
                </Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "300px" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Back-View</Card.Text>
                <Button variant="primary" onClick={handleClick}>
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </ReactCardFlip>
        </>
      </Container>
    </>
  );
}

export default HomePage;
