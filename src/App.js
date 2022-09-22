import './App.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { Home } from './components'

const App = () => (
  <BrowserRouter>
    <Box>
      
      <Routes>
         <Route exact path='/' element={<Home />} />
         
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
