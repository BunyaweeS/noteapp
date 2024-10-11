import logo from './logo.svg';
import './App.css';
import Register from './page/Register';
import Main from './page/main';
import Login from './page/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/Note" element={<Main />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
    
    
    
  );
}

export default App;
