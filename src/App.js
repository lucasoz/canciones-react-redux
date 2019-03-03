import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Menu, Progress } from 'semantic-ui-react'
import Songs from './pages/Songs'
import SongForm from './pages/SongForm'
import NotFound from './pages/NotFound'

class App extends Component {
  render() {
    
    return (
      <BrowserRouter>
        <div className="container">
            <Menu>
                <Link to="/">
                    <Menu.Item>Songs</Menu.Item>
                </Link>
                <Link to="/song">
                    <Menu.Item>Add Song</Menu.Item>
                </Link>
            </Menu>
            <Switch>
                <Route exact path="/"  component={Songs}/>
                <Route exact path="/song"  component={SongForm}></Route>
                <Route path="/song/:id" component={SongForm} />
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
    );
  }
}

// could be used while data is fetch
// <Progress percent={100} active color="blue" size="big" />


export default App;
