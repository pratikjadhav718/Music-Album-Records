// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       Music Album Records
//     </div>
//   );
// }

// export default App;

import './App.css';
import { Route, Switch } from 'react-router-dom'
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
// import { UsersList } from './components/Users';
import { ContactUs } from './components/ContactUs';
// import { UserDetails } from './components/UserDeatails';
import { Login } from './components/Login';
import { PrivateRoute } from './components/PrivateRoute';
import {Users} from './components/Users';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>

    <Route path="/about">
      <About/>
    </Route>

    <Route path="/contact">
      <ContactUs/>
    </Route>

    <PrivateRoute path="/users">
      <Users />
    </PrivateRoute>

    {/* <Route exact path="/users">
      <UsersList/>
    </Route> */}

    {/* <PrivateRoute path="/user/:id">
      <UserDetails/>
    </PrivateRoute> */}

    <Route exact path="/login">
      <Login/>
    </Route>

    <Route>404 Not Found</Route>
    </Switch>


    </div>

    


  );
}

export default App;
