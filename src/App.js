import {Navbar, Home} from './Components'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Home/>
      </div>
    </Router>
  );
}

export default App;
