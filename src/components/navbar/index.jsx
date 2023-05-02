//import Button from "react-bootstrap/Button";
//import Container from "react-bootstrap/Container";
//import Nav from "react-bootstrap/Nav";
//import Navbar from "react-bootstrap/Navbar";

/*
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
*/

export default function NavHome() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
