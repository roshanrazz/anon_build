import { Link } from "react-router-dom";
import { Navbar, Stack, Button, Container, Nav } from "react-bootstrap";
import styles from "../../styles/Style.module.css";
import logo from "../../asset/img/col.png";

const HomeNav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container style={{ width: "100%" }}>
        <Navbar.Brand Link to="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Brand Link to="/">
          Anon-TipOff
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link Link to="/">
              Home
            </Nav.Link>
            <Nav.Link Link to="#link">
              About us
            </Nav.Link>
            <Nav.Link Link to="/Questionaire">
              Questionaire
            </Nav.Link>
            {/* <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item Link to="#action/3.1">
                How to give anonymous tip-off
              </NavDropdown.Item> */}
            {/* <NavDropdown.Item Link to="#action/3.2">
                Another action
              </NavDropdown.Item> */}
            {/* <NavDropdown.Item Link to="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider /> */}
            {/* <NavDropdown.Item Link to="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            {/* </NavDropdown> */}
          </Nav>

          <Nav>
            {/* <div className="d-flex" gap={3}>
              <Button variant="primary" size="sm">
                User
              </Button>{" "}
              <Button variant="danger" size="sm">
                Official
              </Button>
            </div> */}
            <Stack direction="horizontal" gap={3}>
              <div>
                <Button variant="primary" size="sm">
                  User
                </Button>{" "}
              </div>
              <div>
                <Button variant="danger" size="sm">
                  Official
                </Button>
              </div>
            </Stack>
          </Nav>
          {/* <Container className={` ${styles.container_button}, d-flex`}>
            <Button variant="primary">User</Button>
            {"   "}
            <span> {"- "}</span>
            <Button variant="danger">Official</Button>
          </Container> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HomeNav;
