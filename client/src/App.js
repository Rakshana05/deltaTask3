
import './App.css';
import Login from './components/login';
import Register from './components/register';

import {Route,Routes} from "react-router-dom"
function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path={'/register'} element={<Register />} />
    </Routes>
    
  );
}

export default App;
