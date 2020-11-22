import React from 'react';
import { Link } from 'gatsby';
import { Navbar, Nav } from 'react-bootstrap';

import devIcon from '../../images/dev-icon.svg';

import { StyledNavbarLink } from './styles';

interface IProps {
  pageInfo: { pageName: string };
}

const CustomNavbar: React.FC<IProps> = ({ pageInfo }) => {
  return (
    <>
      <Navbar variant="dark" expand="md" id="site-navbar" style={styles.navbarBorder}>
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">
            <img src={devIcon} width="32px" height="auto" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" activeKey={pageInfo && pageInfo.pageName}>
            <StyledNavbarLink href="#home">
              <Nav.Link as="span" className="navbar-link">
                Home
              </Nav.Link>
            </StyledNavbarLink>
            <StyledNavbarLink className="link-no-style" href="#about">
              <Nav.Link as="span" className="navbar-link">
                About
              </Nav.Link>
            </StyledNavbarLink>
            <StyledNavbarLink className="link-no-style" href="#projects">
              <Nav.Link as="span" className="navbar-link">
                Projects
              </Nav.Link>
            </StyledNavbarLink>
            <StyledNavbarLink className="link-no-style" href="#contact">
              <Nav.Link as="span" className="navbar-link">
                Contact
              </Nav.Link>
            </StyledNavbarLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

const styles = {
  navbarBorder: {
    borderBottom: '1px solid #3282B8',
  },
};

export default CustomNavbar;
