import logo from './logo.svg';
import './App.css';
import { Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
