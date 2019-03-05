import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Menu, Progress } from 'semantic-ui-react'
import Songs from './pages/Songs'
import NotFound from './pages/NotFound'
import EditSong from './pages/EditSong'
import AddSong from './pages/AddSong'

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
                <Route exact path="/song"  component={AddSong}></Route>
                <Route path="/song/:id" component={EditSong} />
                <Route exact path="/not_found"  component={NotFound}></Route>
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
