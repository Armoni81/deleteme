import logo from './logo.svg';
import './App.css';import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";
import SignInn from './components/deleteme';

function App() {
  return (
    <Router baseame = "/signin" >
            <nav>
              <div className = "navbar">
                <p id= "quiz-name">Ultimate-Quiz</p> 
                <ul className= "navbar-list">
                    <li><a href="/" id = "navhover">Home</a></li>
                    <li><a href="/signin" id = "navhover">Sign-In</a></li>
                    <li><a href="/about" id = "navhover">About</a></li>
                </ul>
                <button>HI</button>
              </div>
            </nav>
            <Routes>
              <Route path="/signin" element = {<SignInn/>} />
            </Routes>
        </Router>
  );
}

export default App;
