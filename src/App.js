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
              <Route path='makeadmin' element={<MakeAdmin></MakeAdmin>}></Route>
              <Route path='manageproducts' element={<ManageProduct></ManageProduct>}></Route>
              <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
            </Route>
          </Route>
        </Route>


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
