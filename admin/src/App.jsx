import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Branch from './pages/branch/Branch'
import BranchAdd from './pages/branch/BranchAdd'
import BranchDetail from './pages/branch/BranchDetail'
import BranchUpdate from './pages/branch/BranchUpdate'
import Catalog from './pages/catalog/Catalog'
import CatalogAdd from './pages/catalog/CatalogAdd'
import CatalogUpdate from './pages/catalog/CatalogUpdate'
import Footer from './Component/Footer'
import HeaderMeta from './Component/HeaderMeta'
import Home from './pages/Home'
import Login from './pages/Account/Login'
import Navbar from './Component/Navbar'
import Order from './pages/Order/Order'
import OrderDetail from './pages/Order/OrderDetail'
import OrderUpdate from './pages/Order/OrderUpdate'
import Product from './pages/product/Product'
import ProductAdd from './pages/product/ProductAdd'
import ProductOfCatalog from './pages/catalog/ProductOfCatalog'
import ProductUpdate from './pages/product/ProductUpdate'
import React from 'react'
import { ToastContainer } from 'react-toastify';
import User from './pages/user/User'
import UserAdd from './pages/user/UserAdd'
import UserUpdate from './pages/user/UserUpdate'

const App = () => {
  return (
    <BrowserRouter>
      <HeaderMeta />
      <Navbar/>
      <ToastContainer
            autoClose={2000}
            closeOnClick
            pauseOnHover={true}
            position='top-right'
            style={{zIndex: 1000,
              position: 'fixed',
              top: '7rem',
              right: '10px',}}
          />
      <Routes>
        <Route index element = {<Home />}/>
        <Route path='/catalog' element = {<Catalog />} />
        <Route path='/product' element = {<Product />} />
        <Route path='/add-product' element = {<ProductAdd />}/>
        <Route path='/branch' element = {<Branch />} />
        <Route path='/branch/:path' element = {<BranchDetail />} />
        <Route path='/user' element = {<User />} />
        <Route path='/add-user' element = {<UserAdd />} />
        <Route path='/user/:id' element = {<UserUpdate />} />
        <Route path='/product/:id' element = {<ProductUpdate />} />
        <Route path='/catalog/:id' element = {<CatalogUpdate />} />
        <Route path='/add-catalog' element = {<CatalogAdd />} />
        <Route path='/add-branch' element = {<BranchAdd/>} />
        <Route path='/branch/update/:id' element = {<BranchUpdate/>} /> 
        <Route path='/catalog/detail/:path' element = {<ProductOfCatalog/>} /> 
        <Route path='/login' element = {<Login/>} /> 
        <Route path='/order' element = {<Order/>} /> 
        <Route path='/order/update/:id' element = {<OrderUpdate/>} /> 
        <Route path='/order/detail/:id_order' element = {<OrderDetail/>} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App