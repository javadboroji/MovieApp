import React, { useState, useEffect ,useContext} from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useParams } from 'react-router-dom';
import newContext from "../../Context";
import Comments from "../Comment/Comments";
import "../../App.css";

const API_IMAGE = "https://image.tmdb.org/t/p/w500/";

export default function SinglePost() {

  const {apiKey,saveMovieHandler,moviePost, setMoviePost} = useContext(newContext);
  let { movieId } = useParams();
  const API_URL_ID = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;
  useEffect(() => {
    axios.get(API_URL_ID).then((res) => setMoviePost(res.data));
  }, []);

  return (
    <>
      <div className="singlepost">
        <Container>
            <Row>
              <Col lg={12}>
              <div className="single-image-box">
              <img className="single-image" src={API_IMAGE+moviePost.poster_path} alt={moviePost.title}/>
              </div>
                <h1 className="text-color text-center"> {moviePost.title}</h1>
               <div className="singlepost-des">
               <h5 className="text-color">Production Year :{""}{moviePost.release_date}{" "} <i className="fa-solid fa-calendar-days  lasting-icon"></i> </h5>
               <h5 className="text-color">popularity :{""}{ moviePost.popularity} </h5>
               <h5 className="text-color" > Language :{" "}{ moviePost.original_language}{" "}<i className="fa-solid fa-earth-americas  lasting-icon"></i></h5>
                <h5 className="text-color">Socer :{""}{moviePost.vote_average} {" "}<i className="fa-solid fa-star lasting-icon"></i> </h5>
                <h5><a href="#" onClick={(e)=>saveMovieHandler(e)}> <i className="fa-solid fa-bookmark lasting-icon"></i></a></h5>
               </div>
               <p className="text-color"><span className="text-des">overview</span> :{""}{moviePost.overview}</p>
              <Comments />
              </Col>
            </Row>
        </Container>
      </div>
    </>
  );
}
