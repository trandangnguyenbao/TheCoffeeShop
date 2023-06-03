import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AddStaff from './page/staff/AddStaff'
import AddTable from './page/table/AddTable'
import Catalog from './page/catalog/Catalog'
import Footer from '../src/Component/Footer'
import HeaderMeta from '../src/Component/HeaderMeta'
import Home from './page/Home'
import Login from './page/Account/Login'
import ManageOrder from './page/manageOrder/ManageOrder'
import Navbar from '../src/Component/Navbar'
import Order from './page/order/Order'
import OrderDetail from './page/manageOrder/OrderDetail'
import Product from './page/product/Product'
import ProductAdd from './page/product/ProductAdd'
import ProductOfCatalog from './page/catalog/ProductOfCatalog'
import React from 'react'
import Staff from './page/staff/Staff'
import StaffUpdate from './page/staff/StaffUpdate'
import Table from './page/table/Table'
import TableUpdate from './page/table/TableUpdate'
import { ToastContainer } from 'react-toastify';

// import Home from ''

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
                <Route path='/catalog' element = {<Catalog />}/>
                <Route path='/catalog/detail/:path' element = {<ProductOfCatalog/>} /> 
                <Route path='/product' element = {<Product/>} /> 
                <Route path='/table' element = {<Table/>} /> 
                <Route path='/order' element = {<Order/>} /> 
                <Route path='/staff' element = {<Staff/>} /> 
                <Route path='/addStaff' element = {<AddStaff/>} /> 
                <Route path='/staff/update/:id' element = {<StaffUpdate/>} /> 
                <Route path='/login' element = {<Login/>} /> 
                <Route path='/add-product' element = {<ProductAdd/>} /> 
                <Route path='/addTableOrder' element = {<AddTable/>} /> 
                <Route path='/table/update/:id' element = {<TableUpdate/>} /> 
                <Route path='/manage-order' element = {<ManageOrder/>} /> 
                <Route path='/manage-order/:id_order' element = {<OrderDetail/>} /> 
            </Routes>
        <Footer />
        </BrowserRouter>
    )
}

export default App