
import './App.css';
import Register from './components/register';
import Login from './components/Login';
import Home from './components/Home';
import Logout from './components/Logout';

import {Route,Routes} from "react-router-dom"

function App() {
  
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path={'/register'} element={<Register />} />
      <Route path={'/home'} element={<Home />} />
      <Route path={'/logout'} element={<Logout />} />
    </Routes>
    
  );
}

export default App;
