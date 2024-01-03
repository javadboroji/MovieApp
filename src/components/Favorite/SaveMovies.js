import React, { useContext, useState } from "react";
import "../../App.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
const API_IMAGE = "https://image.tmdb.org/t/p/w500/";
export default function SaveMovies({ data }) {
  const uniqueIds = [];
/**    removing suplicate value     */
  const finalSaveMovie = data.filter((val) => {
    const isDuplicate = uniqueIds.includes(val.id);
    if (!isDuplicate) {
      uniqueIds.push(val.id);
      return true;
    }
    return false;
  });


  return (
    <Container>
      <Row>
        {data &&
          finalSaveMovie.map((item) => {
            return (
              <Col lg={4} sm={12} key={item.id} >
                  <div className="movie-card-col" style={{display:'flex',flexDirection:'column'}}>
                    <Link to={`/singlepost/${item.id}`} style={{width:'100%',height:'100%'}}>
                      <div style={{position:'relative' ,paddingTop:'100%', width:'100%'}}>
                      <img
                          className="lasting-image"
                          src={API_IMAGE + item.poster_path}
                          alt={item.title}
                      />
                      </div>
                    </Link>

                    <h3 className="lasting-movie-name" style={{textAlign:'center'}}> {item.title}</h3>
                    <Button variant="contained" color="success">
                      Download{" "}
                      <i className="fa fa-download " aria-hidden="true"></i>
                    </Button>
                  </div>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}
