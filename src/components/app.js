import { Router } from 'preact-router';
import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Audio from '../routes/audioRoute';
import Etc from '../routes/etcRoute';


const App = () => (
  <div id="app">
    {/* <Header /> */}
    <Router>
      <Home path="/" />
      <Audio path="/audioRoute" />
      <Etc path="/etcRoute" />
    </Router>
  </div>
)

export default App;
