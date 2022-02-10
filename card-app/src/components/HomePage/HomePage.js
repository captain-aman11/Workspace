import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { Button, Card } from "react-bootstrap";
import Grid from "@mui/material/Grid";

export default function HomePage() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardData, setCardData] = useState(null);

  // useEffect function
  useEffect(() => {
    //removed async here
    const url = "https://rickandmortyapi.com/api/character";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setCardData(json.results);
        console.log(json.results);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        {cardData &&
          cardData.map((c) => {
            return (
              <Grid item key={c.id} sx={{ ml: 1 }}>
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={c.image}
                      height="300px"
                      width="300px"
                    />
                    <Card.Body>
                      <Card.Title>{c.name}</Card.Title>
                      <Card.Text>{c.species}</Card.Text>
                      <Button variant="primary" onClick={handleClick}>
                        View Details
                      </Button>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: "300px", height: "300px" }}>
                    <Card.Body>
                      <Card.Title>Character Details</Card.Title>
                      <Card.Text>Name : {c.name}</Card.Text>
                      <Card.Text>Status : {c.status}</Card.Text>
                      <Card.Text>Gender : {c.gender}</Card.Text>
                      <Card.Text>Species : {c.species}</Card.Text>
                      <Button variant="primary" onClick={handleClick}>
                        View Image
                      </Button>
                    </Card.Body>
                  </Card>
                </ReactCardFlip>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}
