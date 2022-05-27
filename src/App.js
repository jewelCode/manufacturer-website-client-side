import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blogs/Blog';
import AddAReview from './Pages/Dashboard/AddAReview';
import AddProduct from './Pages/Dashboard/AddProduct';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
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
    <div>
        <Navbar></Navbar>
        <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="login" element={<Login></Login>}></Route>
              <Route path="signup" element={<SignUp></SignUp>}></Route>
              <Route path="about" element={<About></About>}></Route>
              <Route path="blog" element={<Blog></Blog>}></Route>
              <Route path="myportfolio" element={<MyPortfolio></MyPortfolio>}></Route>
              <Route path="dashboard" element={
                <RequireAuth>
                    <Dashboard/>
                </RequireAuth>}>
                <Route index element={<MyProfile></MyProfile>}></Route>
                <Route path="addareview"element={<AddAReview></AddAReview>}></Route>
                <Route path="myorders"element={<MyOrders></MyOrders>}></Route>
                <Route path="users"element={<Users></Users>}></Route>
                <Route path="addproduct"element={<AddProduct></AddProduct>}></Route>
                <Route path="manageorders"element={<ManageOrders></ManageOrders>}></Route>
            </Route>
              <Route path="purchase/:purchaseId" element={<RequireAuth>
                      <Purchase></Purchase>
              </RequireAuth>}></Route>
              <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
    </div>
  );
}

export default App;
