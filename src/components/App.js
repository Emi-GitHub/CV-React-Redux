import React, { Component } from 'react';
import {Router, Route, BrowserRouter, Switch} from 'react-router-dom';
import history from '../history';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Router history={history}>
                        <BrowserRouter>
                        <div>
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route path="/about" component={About} />
                                <Route path="/resume" component={Resume} />
                                <Route path="/projects" component={Projects} />
                                <Route path="/contact" component={Contact} />
                            </Switch>
                        </div>
                        </BrowserRouter>
                    </Router>
                </div>
            </div>
        )
    }
}

export default App;
