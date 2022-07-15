import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import"./App.css"

const apiKey = "9b3c3dd82f875d13ca789d1e30540fe4";
const API_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

export default function () {
    const [cat, setCat] = useState([])
    useEffect(() => {
        axios.get(API_URL).then((res) => setCat(res.data.genres));
      }, []);
    
  return (
    <div>
        {}
    </div>
  )
}
