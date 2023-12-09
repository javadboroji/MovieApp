import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Lasting from "./components/Lasting/Lasting";
import axios from "axios";
import './App.css'


const apiKey = "79d67acf2b0c54cb33201f4d9e957583";
const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=1`;
export default function Pagenat() {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;
  const [lasting, setLasting] = useState([]);

  
useEffect(()=>{
  axios.get(API_URL)
  .then((res) => setLasting(res.data.results))
  .catch(err=>console.log(err))
},[])
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(lasting.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(lasting.length / itemsPerPage));
  }, [itemOffset, itemsPerPage,lasting]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % lasting.length;
   
    setItemOffset(newOffset);
  };

  return (
    <div className="pagantion-contaiiner">
      <Lasting currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
