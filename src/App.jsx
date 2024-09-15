import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Create from './components/Create'
import Product from './components/Product'
import Basket from './components/Basket'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  const routes = [
   {
    id: 1,
    link: '/',
    element: <Home/>
   },
   {
    id: 2,
    link: '/create',
    element: <Create/>
   },
   {
    id: 3,
    link: '/shop',
    element: <Product/>
   },
   {
    id: 4,
    link: '/basket',
    element: <Basket/>
   }

  ]

  return (
    <>
      <Header/>
      <Routes>
        {
          routes.map((el) => (
            <Route path={el.link} element={el.element} key={el.id} />
          ))
        }
      </Routes>
      <Footer/>
    </>
  )
}

export default App
