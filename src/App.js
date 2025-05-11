import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <h2>About Page</h2>
            <p>This is the about page.</p>
          </Route>
          <Route path="/contact">
            <h2>Contact Page</h2>
            <p>This is the contact page.</p>
          </Route>
          <Route path="/">
            <h2>Home Page</h2>
            <p>Welcome to the home page!</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
