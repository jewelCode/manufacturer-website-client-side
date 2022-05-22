import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blogs/Blog';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import NotFound from './Pages/NotFound/NotFound';
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
              <Route path="about" element={<About></About>}></Route>
              <Route path="blog" element={<Blog></Blog>}></Route>
              <Route path="myportfolio" element={<MyPortfolio></MyPortfolio>}></Route>
              <Route path="dashboard" element={<RequireAuth>
              <Dashboard/>
            </RequireAuth>}></Route>
              <Route path="purchase" element={<RequireAuth>
                      <Purchase></Purchase>
              </RequireAuth>}></Route>
              <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
    </div>
  );
}

export default App;
