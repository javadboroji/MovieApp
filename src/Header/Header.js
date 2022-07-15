import React,{useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import newContext from "../Context";


function Header() {
  const {searchValue,searchHandler,handleSubmit} = useContext(newContext)

  return (
    <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
      <Container fluid>
      <Link className='nav-link-botstrap-customize' to="/"><Navbar.Brand>  MOVIE TRD</Navbar.Brand>  </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Link to="/saveMovies" className='nav-link-botstrap-customize'>  Favorite</Link> 
            <Nav.Link href="#" className='nav-link-botstrap-customize' >
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchValue}
              onChange={(e)=>searchHandler(e)}
            />
            <Button variant="outline-success" > <Link to="/search" style={{textDecoration:"none", color:"white"}}>Search</Link> </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;