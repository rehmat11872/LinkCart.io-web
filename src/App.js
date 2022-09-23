import './App.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { Home,  Mypage, Orders, Settings, Products } from './components'


const App = () => (
  <BrowserRouter>
    <Box>
     
      <Routes>
          <Route exact path='/' element={<Home />} /> 
         <Route  path='/mypage' element={<Mypage/>} />
         <Route  path='/orders' element={<Orders/>} />  
         <Route  path='/products' element={<Products/>} /> 
         <Route  path='settings/' element={<Settings/>} />  

      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
