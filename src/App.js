import './App.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { Navbar } from './components'

const App = () => (
  <BrowserRouter>
    <Box>
      
      <Routes>
         <Route exact path='/' element={<Navbar />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
