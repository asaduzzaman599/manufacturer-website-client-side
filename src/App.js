import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Auth/Login';
import SignUp from './Pages/Auth/SignUp';
import Purchase from './Pages/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard';
import RequiredAuth from './Pages/Auth/RequiredAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageProduct from './Pages/Dashboard/ManageProduct/ManageProduct';
import AddProduct from './Pages/Dashboard/AddProduct';
import RequiredAdmin from './Pages/Auth/RequiredAdmin';
import MyOrders from './Pages/Dashboard/MyOrders.js/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import Manageorders from './Pages/Dashboard/ManageOrder/Manageorders';
import Payment from './Pages/Dashboard/Payment/Payment';
import RequiredUser from './Pages/Auth/RequiredUser';
import NotFound from './Pages/Shared/NotFound';

function App() {
  const routes = [
    { id: 1, name: "home", path: "/", Component: Home },
    { id: 2, name: "login", path: "/login", Component: Login },
    { id: 3, name: "signup", path: "/signup", Component: SignUp },
  ]

  const privateRoute = [
    { id: 4, name: "Order", path: "/order/:partId", Component: Purchase },
  ]
  return (
    <div className="min-h-screen flex flex-col justify-between App">
      <Header></Header>
      <ToastContainer />
      <Routes>
        {
          routes.map(({ id, name, path, Component }) => <Route key={id} path={path} element={<Component />}></Route>)
        }

        {/* /* privateRoute.map(({ id, name, path, Component }) => <Route path={path} element={<Component />}></Route>) */}
        <Route element={<RequiredAuth></RequiredAuth>}>
          <Route path='/order/:partId' element={<Purchase />}></Route>
          <Route element={<RequiredAuth></RequiredAuth>}>
            <Route path='/dashboard' element={<Dashboard />}>
              <Route index element={<MyProfile></MyProfile>}></Route>

              <Route path='makeadmin' element={<RequiredAdmin><MakeAdmin></MakeAdmin></RequiredAdmin>}></Route>
              <Route path='manageproducts' element={<RequiredAdmin><ManageProduct></ManageProduct></RequiredAdmin>}></Route>
              <Route path='addproduct' element={<RequiredAdmin><AddProduct></AddProduct></RequiredAdmin>}></Route>
              <Route path='manageorder' element={<RequiredAdmin><Manageorders></Manageorders></RequiredAdmin>}></Route>


              <Route path='myorder' element={<RequiredUser><MyOrders></MyOrders></RequiredUser>}></Route>
              <Route path='addreview' element={<RequiredUser><AddReview></AddReview></RequiredUser>}></Route>
              <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
              <Route path='payment/:orderId' element={<Payment></Payment>}></Route>

            </Route>
          </Route>
        </Route>

        <Route path='*' element={<NotFound />}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
