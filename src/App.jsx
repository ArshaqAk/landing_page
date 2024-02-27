import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
