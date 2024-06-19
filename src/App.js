import logo from './logo.svg';
import './App.css';
import navbar from './components/navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router> <navbar/>
       </Router>

    </>
  );
}

export default App;
