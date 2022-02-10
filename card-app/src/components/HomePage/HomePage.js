import React, { useState, useEffect } from "react";
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

  const [cardData, setCardData] = useState([]);

  // useEffect function
  useEffect(async () => {
    const url = "https://rickandmortyapi.com/api/character";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const jsonData = json.results;
        setCardData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

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
      {cardData.map((c) => {
        <h1>{c.id}</h1>;
      })}
      <Container style={{ height: "100vh" }}>
        {cardData.map((c) => {
          <h1>It's rendering here</h1>;
          // <ReactCardFlip
          //   key={c.id}
          //   isFlipped={isFlipped}
          //   flipDirection="vertical"
          // >
          //   <Card style={{ width: "300px" }}>
          //     <Card.Img
          //       variant="top"
          //       src={c.image}
          //       height="300px"
          //       width="300px"
          //     />
          //     <Card.Body>
          //       <Card.Title>{c.name}</Card.Title>
          //       <Card.Text>{c.species}</Card.Text>
          //       <Button variant="primary" onClick={handleClick}>
          //         View Details
          //       </Button>
          //     </Card.Body>
          //   </Card>

          //   <Card style={{ width: "300px", height: "300px" }}>
          //     <Card.Body>
          //       <Card.Title>Character Details</Card.Title>
          //       <Card.Text>Name : {c.name}</Card.Text>
          //       <Card.Text>Status : {c.status}</Card.Text>
          //       <Card.Text>Gender : {c.gender}</Card.Text>
          //       <Card.Text>Species : {c.species}</Card.Text>
          //       <Button variant="primary" onClick={handleClick}>
          //         View Image
          //       </Button>
          //     </Card.Body>
          //   </Card>
          // </ReactCardFlip>;
        })}
      </Container>
    </>
  );
}

export default HomePage;
