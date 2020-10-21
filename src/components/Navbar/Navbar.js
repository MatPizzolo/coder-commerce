import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { makeStyles } from '@material-ui/core/styles';
import CartWidget from './Cart';


const useStyles = makeStyles((theme) => ({
  root: {
    color: 'red',
    fontSize: '30px',
  },
  navItemss: {
    fontSize: '20px',
  },
  navItemss2: {
    fontSize: '20px',
  },
  navColor: {
    backgroundColor: '#1569C7'
  }
}));

function NavbarApp() {
  const classes = useStyles();

  return (
    <Navbar className={classes.navColor} collapseOnSelect expand="lg"  variant="dark" >
    <Navbar.Brand href="#home" className={classes.root}>Verified</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features" className={classes.navItemss}>Browse</Nav.Link>
        <Nav.Link href="#pricing" className={classes.navItemss}>New</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="#deets" className={classes.navItemss2}> <CartWidget /> </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>


  );
}

export default NavbarApp;
