import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

import ItemListContainer from './components/ItemListContainer'

import NavBar from './components/Navbar';


const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting="Bienvenidos" />
    </>
  )
}

export default App