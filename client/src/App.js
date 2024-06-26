import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterComponent from './Components/RegisterComponent';
import LoginComponent from './Components/LoginComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<RegisterComponent/>} />
        <Route path='/login' element={<LoginComponent/>} />
        <Route path='/profile' element={<LoginComponent/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
