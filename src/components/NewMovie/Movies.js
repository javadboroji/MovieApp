import React, { useContext ,useEffect,useState} from "react";
import Slider from "react-slick";
import{Container,Row,Col} from"react-bootstrap"
import Typography from "@mui/material/Typography";
import "../../App.css";
import TopRated from "../TopRated/TopRated";
import Banner from "./Banner";
import Pagenat from "../../Pagenat";
import newContext from "../../Context";
import { Link } from 'react-router-dom';
const API_IMAGE = "https://image.tmdb.org/t/p/w500/";
export default function Movies({ data,savemovie }) {
  const [width, setWidth]   = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
}
const {setMovieID} = useContext(newContext)
useEffect(() => {
  window.addEventListener("resize", updateDimensions);
  return () => window.removeEventListener("resize", updateDimensions);
}, []);

  const settings = {
    dots: false,
    infinite: true,
    arrows:false,
    slidesToShow: width<720? 1:2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    
    };
  return (
    <>
    <Container fluid>
      <Row>
      <Banner />
      </Row>
      </Container>
      <Container>
        <Row>
      <Typography variant="h4" align="center" className="title">
            {" "}
            New movie
          </Typography>
      <Slider {...settings}>

        {data.map((item) => {
          return (
       
            <Col   className="movie-card-col"  key={item.id}>
             
              <div className="moive-containner">
                <div className="movie-box">
                  <Link to={`/singlepost/${item.id}`}>
                    <img
                      src={API_IMAGE + item.backdrop_path}
                      alt={item.title}
                      className="movie-img"
                    />
                  </Link>
                 <div className="movie-title">
                 <h6 className="w-100 text-center">{item.title}</h6>
                 </div>
                </div>
              </div>
            </Col>
  
          );
        })}
        </Slider>
  </Row>
    </Container>
    <TopRated />
    <Pagenat />
    </>
  );
}
