<Container style={{ height: "100vh" }}>
  {cardData.map((c) => {
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
</Container>;
