import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../src/Component/Footer'
import HeaderMeta from '../src/Component/HeaderMeta'
import Navbar from '../src/Component/Navbar'
import Catalog from './page/catalog/Catalog'
import ProductOfCatalog from './page/catalog/ProductOfCatalog'
import Home from './page/Home'
import Product from './page/product/Product'
import Staff from './page/staff/Staff'
import Table from './page/table/Table'
import Login from './page/Account/Login'
import ProductAdd from './page/product/ProductAdd'
import AddTable from './page/table/AddTable'
import TableUpdate from './page/table/TableUpdate'
import AddStaff from './page/staff/AddStaff'
import StaffUpdate from './page/staff/StaffUpdate'
import Order from './page/order/Order'
import ManageOrder from './page/manageOrder/ManageOrder'
import OrderDetail from './page/manageOrder/OrderDetail'
// import Home from ''

const App = () => {
    return (
        <BrowserRouter>
            <HeaderMeta />
            <Navbar/>
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