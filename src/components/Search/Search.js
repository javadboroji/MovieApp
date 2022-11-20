import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import newContext from "../../Context";

const API_IMAGE = "https://image.tmdb.org/t/p/w500/";
export default function Search() {
  const { searchValue, apiKey,handleSubmit } = useContext(newContext);

  const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchValue}`;
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    axios.get(API_SEARCH).then((res) => setSearchData(res.data.results));
  }, [handleSubmit]);

  return (
    <Container>

        { searchData && searchData.map((item) => {
          return (
            <Row key={item.id} className="lasting-box">
              <Col lg={4} sm={12}>
                <Link to={`/singlepost/${item.id}`}>
                  <img
                    src={API_IMAGE + item.backdrop_path}
                    alt={item.title}
                    className="lasting-image"
                  />
                </Link>
              </Col>
              <Col
                lg={8}
                sm={12}
                className="p-3 d-flex flex-column justify-content-center align-items-center"
              >
                <h5 className="lasting-movie-name"> {item.title}</h5>
                <div className="lasting-des-overviwo">
                  <p> {item.overview}</p>
                </div>

                <div className="lasting-des-footer">
                  <span>
                    {" "}
                    Production Year : {item.release_date}{" "}
                    <i
                      className="fa fa-building lasting-icon"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span>
                    {" "}
                    Socer: {item.vote_average}
                    <i className="fa-solid fa-star lasting-icon"></i>
                  </span>
                  <span>
                    Language: {item.original_language}{" "}
                    <i className="fa-solid fa-globe lasting-icon"></i>{" "}
                  </span>
  
                </div>
              </Col>
            </Row>
          );
        })}

    </Container>
  );
}
