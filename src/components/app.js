import { Router } from 'preact-router';
// import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
// import Audio from '../routes/audioRoute';
// import Etc from '../routes/etcRoute';
// import Shoot from '../routes/shootRoute';

const App = () => (
  <div id="app">
    {/* <Header /> */}
    <Router>
      <Home path="/" />
      {/* <Audio path="/audioRoute" />
      <Etc path="/etcRoute" />
      <Shoot path="/shootRoute" /> */}
    </Router>
  </div>
)

export default App;
