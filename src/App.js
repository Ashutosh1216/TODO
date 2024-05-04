import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Header';
import Notes from './components/Notes';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Navbar/>
    <Routes>
      <Route path='/' element={<Notes/>}/>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
      <Footer/>
    </div>
  );
}

export default App;
