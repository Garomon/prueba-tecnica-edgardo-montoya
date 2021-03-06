import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import useStyles from './styles';


import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';


const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Paper elevation={24} className={classes.paper} >
          <Navbar />
          <Switch>
            <Route path="/" exact component={() => <Redirect to="/posts" />} />
            <Route path="/posts" exact component={Home} />
            <Route path="/posts/search" exact component={Home} />
            <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
          </Switch>
        </Paper>
      </Container>
    </BrowserRouter>
  );
};

export default App;
