
import './App.css';
import Register from './components/Register';
import Login from './components/Login';


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
