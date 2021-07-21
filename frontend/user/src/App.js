import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
