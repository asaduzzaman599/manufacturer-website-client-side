import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Auth/Login';
import SignUp from './Pages/Auth/SignUp';

function App() {
  const routes = [
    { id: 1, name: "home", path: "/", Component: Home },
    { id: 2, name: "login", path: "/login", Component: Login },
    { id: 3, name: "signup", path: "/signup", Component: SignUp },
  ]
  return (
    <div className="min-h-screen flex flex-col justify-between App">
      <Header></Header>
      <Routes>
        {
          routes.map(({ id, name, path, Component }) => <Route path={path} element={<Component />}></Route>)
        }
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
