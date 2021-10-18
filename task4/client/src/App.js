import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './components/pages/PageNotFound';
import Projects from './components/pages/Projects';
import EditEmployee from './components/employees/EditEmployee';
import ViewEmployee from './components/employees/ViewEmployee';
import EditProject from './components/projects/EditProject';
import ViewProject from './components/projects/ViewProject';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route exact path="/register" component={RegisterPage}/>
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/employees/update/:_id" component={EditEmployee} />
          <Route exact path="/employees/FindId/:_id" component={ViewEmployee}/>
          <Route exact path="/projects/update/:_id" component={EditProject}/>
          <Route exact path="/projects/FindId/:_id" component={ViewProject}/>
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
