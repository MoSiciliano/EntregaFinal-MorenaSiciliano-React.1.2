import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import NavBar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import About from './components/About';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import Contact from './components/Contact';
import Cart from './components/Cart';
import ShoppingCartContext from './Context/ShoppingCartContext'
import Loading from './components/Loading';
import SendOrder from './components/SendOrder';


const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])

  return (
    <>

      {loading ? (
        <Loading />

      ) : (

        <ShoppingCartContext >

          <BrowserRouter>
            <NavBar />

            <Routes>
              <Route exact path="/" element={<Welcome greeting="Bienvenidos a" />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path='/contact' element={<Contact />}></Route>
              <Route exact path='/cart' element={<Cart />}></Route>
              <Route exact path='/catalogue' element={<ItemListContainer />}></Route>
              <Route exact path="/category/:category" element={<ItemListContainer />}></Route>
              <Route exact path="/item/:id" element={<ItemDetailContainer />}></Route>
              <Route exact path="/checkOut" element={<SendOrder />}></Route>
            </Routes>


          </BrowserRouter>
        </ShoppingCartContext>
      )}
    </>
  )
}

export default App