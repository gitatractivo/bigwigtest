import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';

const App =()=>{
  return (
    <div className="min-w-screern min-h-screen bg-white ">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};



export default App
