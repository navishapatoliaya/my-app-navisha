
import './App.css';
import RootContainer from './container/RootContainer';
import Photos from './container/Photos';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,

} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div><h1>Post listing </h1>
      <Router>
      <div><h1><Link to="/Photos">Photos</Link></h1></div>
      <Switch>
        <Route exact path="/">
          <RootContainer />
        </Route>
        <Route exact path="/Photos">
          <Photos />
        </Route>
      </Switch>
      </Router>
      
      </div>
      </div>
  );
}
export default App;