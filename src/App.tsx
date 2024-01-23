import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import ProfileP from './pages/ProfileP';

const App =()=>{
  return (
    <div className="min-w-screern min-h-screen bg-white ">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ProfileP" element={<ProfileP />} />
      </Routes>
    </div>
  );
};



export default App
