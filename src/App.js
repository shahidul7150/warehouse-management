import { Route, Routes } from 'react-router-dom';

import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import Registration from './components/Login/Registration/Registration';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
   <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Registration></Registration>}></Route>
      </Routes>
    </div>
  );
}

export default App;
