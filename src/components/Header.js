import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="icon"
              src="https://www.graphicsfactory.com/clip-art/image_files/image/9/1364319-4278-Asian-Winked-Chef-Man-Face-Cartoon-Logo-Circle.gif"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            &nbsp;&nbsp;&nbsp;&nbsp;Find Me Resturant
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header