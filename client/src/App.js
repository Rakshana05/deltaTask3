
import './App.css';
import Register from './components/register';
import Login from './components/Login';
import Home from './components/Home';
import Logout from './components/Logout';
import CreateQuiz from './components/CreateQuiz';

import {Route,Routes} from "react-router-dom"
import { UserContextProvider } from './UserContext';

function App() {
  
  return (
    <UserContextProvider>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/create' element={<CreateQuiz />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
