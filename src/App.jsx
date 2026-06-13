
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductList from './components/data/Product'

function App() {
  const [productId, setProductId] = useState('');
  const [cartAllproduct, setCartAllproduct] = useState([]);


  useEffect(() => {
    const filterObject = ProductList.filter((product) => product.id == productId);
    setCartAllproduct([...cartAllproduct, ...filterObject]);
  }, [productId])

  return (
    <>
      <BrowserRouter>
        <Header cartAllproduct={cartAllproduct} />
        <Routes>
          <Route path='/' element={<Home setProductId={setProductId} />}></Route>
          <Route path='/cart' element={<Cart cartAllproduct={cartAllproduct} setCartAllproduct={setCartAllproduct} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
