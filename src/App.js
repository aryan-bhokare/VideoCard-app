
import './App.css';
import CardsList from './components/CardsList';
import Buckets from './components/Buckets';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Link as NavLink, Routes, Route} from 'react-router-dom';
import Bucket from './pages/Bucket'
import Home from './pages/Home';
import History from './pages/History';
import About from './pages/About';



function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/buckets" element={<Bucket/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
