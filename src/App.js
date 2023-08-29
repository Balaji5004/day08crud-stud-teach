import { Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './Component/Dashboard';
import Student from './Component/Student';
import Teachers from './Component/Teachers';
import { Route } from 'react-router-dom';




function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
           <Dashboard/>
        </Route>

        <Route path="/students">
         <Student/>
        </Route>

        <Route path="/teachers">
         <Teachers/>
        </Route>


      </Switch>

      
    </div>
  );
}

export default App;
