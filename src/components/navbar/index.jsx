import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavHome() {
  return (
    <header>
      <Navbar collapseOnSelect expand="md" variant="dark">
        <Container>
          <Navbar.Brand className="text-white" href="#home"><strong>GPT-3</strong></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="white " id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"><strong>Home</strong></Nav.Link>
              <Nav.Link href="#whats-is-gpt"><strong>What is GPT?</strong></Nav.Link>
              <Nav.Link href="#open-ai"><strong>Open AI</strong></Nav.Link>
              <Nav.Link href="#case-studies"><strong>Case Studies</strong></Nav.Link>
              <Nav.Link href="#library"><strong>Library</strong></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#action5">
                <strong>Sign in</strong>
              </Nav.Link>
              <Button variant="outline-secondary">Sign up</Button>{' '}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
