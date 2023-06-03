import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

import Account from './container/AccountPage/Account'
import AddressOrder from './container/AccountPage/AddressOrder'
import BlogStory from './pages/coffeeandstory/BlogStory'
import CamHung from './pages/cloudfee/CamHung'
import Career from './pages/career/Career'
import Cart from './container/Cart/Cart'
import Chitiet from './collection/chitiet/Chitiet'
import CoffeeHome from './collection/coffee/CoffeeHome'
import CoffeeStory from '../src/pages/coffeeandstory/CoffeeStory'
import CoffeeStoryChild from './pages/coffeeandstory/CoffeeStoryChild'
import Footer from './Component/Footer'
import HeaderMeta from './Component/HeaderMeta'
import Home from './pages/home/Home'
import Infomation from './container/AccountPage/Infomation'
import Login from './container/Login/Login'
import Navbar from './Component/Navbar'
import Order from './container/AccountPage/Order'
import Product from './collection/product/Product'
import React from 'react'
import Shop from '../src/pages/danhsachcuahang/Shop'
import SignUp from './container/SignUp/SignUp'
import TeaHolicStory from './pages/coffeeandstory/TeaHolicStory'
import TeaHome from './collection/tea/TeaHome'
import { ToastContainer } from 'react-toastify';

// import Coffee from './collection/coffee/Coffee'



















// import Career from './pages/career/Career'
const App = () => {
  return (
    <BrowserRouter>
        <HeaderMeta />
        <Navbar />
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
        <Route index element = {<Home />} />
                <Route path = '/collections/tra-tai-nha' element = {<TeaHome />} />
                <Route path = '/collections/ca-phe-tai-nha' element = {<CoffeeHome />} />
                <Route path = '/pages/story' element = { <CoffeeStory />} />
                <Route path = '/pages/camhung' element = { <CamHung />} />
                <Route path = '/pages/shop' element = { <Shop />} />
                <Route path = '/pages/story/coffeeholic' element = { <CoffeeStoryChild/>} />
                <Route path = '/pages/story/teaholic' element = { <TeaHolicStory/>} />
                <Route path = '/pages/story/blog' element = { <BlogStory/>} />
                <Route path= '/product/:path_name' element = {<Chitiet />} />
                <Route path= '/collections/:path' element = {<Product />} />
                <Route path= '/cart' element = {<Cart />} />
                {/* <Route path= '/account/Sign-up' element = {<SignUp />} /> */}
                <Route path= '/account/Login' element = {<Login />} />
                <Route path= '/account/sign-up' element = {<SignUp />} />
                <Route path= '/accountInfo' element = {<Account/>} />
                {/* <Route path= '/accountInfo' element = {<Info />} /> */}
                <Route path= '/account/order' element = {<Order />} />
                <Route path= '/account/address' element = {<AddressOrder />} />
                <Route path= '/account/notifications' element = {<Infomation />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
