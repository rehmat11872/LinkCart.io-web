import './App.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { Home } from './components'
import Mypage from './components/Mypage'
import Orders from './components/Orders'
// import { Settings } from '@mui/icons-material';
import Settings from "./components/Settings"
import Products from './components/Products';

const App = () => (
  <BrowserRouter>
    <Box>
      
      <Routes>
         {/* <Route exact path='/' element={<Home />} /> */}
         <Route exact path='/' element={<Mypage/>} />
         {/* <Route exact path='/' element={<Orders/>} />  */}
         {/* <Route exact path='/' element={<Products/>} /> */}
         {/* <Route exact path='/' element={<Settings/>} />  */}



         
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
