import { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Home from './components/HomePage'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Navbar from './components/CustomNavbar'

class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Resume" component={Resume} />
        </div>
      </Router>
    )
  }
}



export default App;
