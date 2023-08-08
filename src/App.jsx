import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import NavBar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import About from './components/About';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import Contact from './components/Contact';


const App = () => {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Welcome greeting="Bienvenidos a" />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>

        <Route exact path="/category/:category" element={<ItemListContainer />}></Route>
        <Route exact path="/item/:id" element={<ItemDetailContainer />}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App