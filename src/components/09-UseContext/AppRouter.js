import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
  import { HomeScreen } from './HomeScreen';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div className="container">
                <NavBar />
                <Switch>
                    <Route path="/" exact component={HomeScreen} />
                    <Route path="/about" exact component={AboutScreen} />
                    <Route path="/login" exact component={LoginScreen} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
