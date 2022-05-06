import './App.css';
import { Route,  Routes } from 'react-router-dom';
import Home from './pages/Home'
import List from './pages/List'
import Article from './pages/Article'
import About from './pages/About'
import Navbar from './components/NavBar'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div>
    <Navbar />
    <Routes> 
        <Route path="/" element={<Home/>} exact/>
        <Route path="list" element={<List/>} exact/>
        <Route path="about" element={<About/>} exact/>
        <Route path="/article/:name" element={<Article/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
    </div>
  );
}

export default App;
