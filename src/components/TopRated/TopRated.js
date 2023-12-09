import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link } from 'react-router-dom';
import "../../App.css";

const apiKey = "79d67acf2b0c54cb33201f4d9e957583";
const API_IMAGE = "https://image.tmdb.org/t/p/w500";
const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=1`;

export default function TopRated() {
  const [trend, setTrend] = useState([]);
  /*  for post per-page */
  const per_page = 6;
  const lists = trend.slice(0, per_page);

  useEffect(() => {axios.get(API_URL)
    .then((res) => setTrend(res.data.results));
}, []);

  return (
    <div className="trend">
      <Typography variant="h4" align="center" className="title">
        {" "}
        Top  Rated
      </Typography>

      <Container>
        <Row>
          {lists &&
            lists.map((item) => {
              return (
                <Col lg={4} sm={12}  key={item.id}>
                    <div className={'trend-image-container movie-card-col'}>
                        <Link to={`/singlepost/${item.id}`}>
                            <img
                                src={API_IMAGE + item.poster_path}
                                className="trend-image"
                                alte={item.id}
                            />
                        </Link>
                        <div className="middle">
                            <div className="text">
                                <p> Name:<span className="movie-trend-name">{item.title}</span></p>
                                <p> Socer: <span className="movie-trend-socer">{item.vote_average} <i className="fa-solid fa-star"></i></span></p>
                            </div>
                        </div>
                    </div>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
}
