import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
  import { HomeScreen } from './HomeScreen';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div className="container">
                <Switch>
                    <Route path="/" exact component={HomeScreen} />
                    <Route path="/about" exact component={AboutScreen} />
                    <Route path="/login" exact component={LoginScreen} />
                </Switch>
            </div>
        </Router>
    )
}
