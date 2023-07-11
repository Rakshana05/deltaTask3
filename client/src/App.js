
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';


import {Route,Routes} from "react-router-dom"
function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path={'/register'} element={<Register />} />
      <Route path={'/home'} element={<Home />} />
    </Routes>
    
  );
}

export default App;
