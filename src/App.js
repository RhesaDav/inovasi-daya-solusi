import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';
import Navbar from './components/Navbar';
import Edit from './pages/Edit';
import Add from './pages/Add';

function App() {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/add' element={<Add />}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
