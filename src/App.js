import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Purchase from './Pages/Purchase/Purchase';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="login" element={<Login></Login>}></Route>
              <Route path="signup" element={<SignUp></SignUp>}></Route>
              <Route path="purchase" element={<RequireAuth>
                      <Purchase></Purchase>
              </RequireAuth>}></Route>
        </Routes>
    </div>
  );
}

export default App;
