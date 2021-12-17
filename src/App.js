import React, { Component } from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import  Home from './components/home';
import  Add  from './components/add';
import  Display  from './components/display';
import  Update  from './components/update';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar sticky="top" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/display">Display</Nav.Link>
              <Nav.Link href="/add">Add</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Switch>
          <Route path='/'exact ><Home /></Route>
          <Route path='/add'> <Add /></Route>
          <Route path='/display'><Display/></Route>
          <Route path="/update/:id" component={Update}></Route>
        </Switch>
        
      </div>
      </Router>
    );
  }
}
export default App;
