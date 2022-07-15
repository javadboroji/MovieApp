import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import "./App.css";


const API_IMAGE = "https://image.tmdb.org/t/p/w500/";

export default function Lasting({currentItems}) {

  return (
    <>
      <Typography variant="h4" align="center" className="title">
        {" "}
        Lasting
      </Typography>
      <Container>

          {currentItems && currentItems.map((item) => {
            return (

               <Row key={item.id} className="lasting-box">
                <Col lg={4} sm={12}>
                  <Link  to={`/singlepost/${item.id}`}>
                    <img
                      src={API_IMAGE + item.backdrop_path}
                      alt={item.title}
                      className="lasting-image"
                    />
                  </Link>
                </Col>
                <Col lg={8} sm={12} className="p-3 d-flex flex-column justify-content-center align-items-center">
                  <h5 className="lasting-movie-name"> {item.title}</h5>
                  <div className="lasting-des-overviwo">
                    <p> {item.overview}</p>
                  </div>

                  <div className="lasting-des-footer">
                    <span> Production Year :{" "}{item.release_date} <i className="fa fa-building lasting-icon" aria-hidden="true"></i></span>
                    <span> Socer:{" "}{item.vote_average}<i className="fa-solid fa-star lasting-icon"></i></span>
                    <span>Language:{" "}{item.original_language} <i className="fa-solid fa-globe lasting-icon"></i> </span>
                    <Button variant="contained" color="success">
                      Download{" "}
                      <i className="fa fa-download " aria-hidden="true"></i>
                    </Button>
                  </div>
                </Col>

              </Row>
             
            );
          })}
              
            
            
      </Container>
    </>
  );
}
