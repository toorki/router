import React from 'react'
import {Navbar, Container, Button, FormControl} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import ReactStars from 'react-stars'

const NavBar = ({handleRate, handleSearch}) => {
  return (
    <div>
        <Navbar className='nb' bg="dark" variant="dark">
            <Container>
                <LinkContainer to="/">
                <Navbar.Brand  width="30" height="30"><b> Go Stream</b></Navbar.Brand>
                </LinkContainer>
                <LinkContainer to="/">
                <Button>Home</Button>
                </LinkContainer>
                <ReactStars 
                count={5}
                size={24}
                onChange={handleRate}
                color2={'#ffd700'}/>
                <FormControl id='search' onChange={(e)=>handleSearch(e)}/>
                <LinkContainer to="/movieList">
                <Button>Movie List</Button>
                </LinkContainer>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar