import Greet from './Greet'
import Message from './Message'
import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


class Routes extends Component{
  render(){
    return(
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <div className="App">
                <Greet className="app-link" name={12} />
              </div>
            </Route>
            <Route path="/">
              <Message />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}


export default Routes; 