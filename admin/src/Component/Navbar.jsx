import React, { useState } from 'react'
import './navbar.css'
import {Link, NavLink} from 'react-router-dom'
import { links } from '../data'
import './navbar.css'
import Logo from '../images/logo1.png'
import Slide from '../images/slide1.png'
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'

const Navbar = () => {
    const history = useNavigate()
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    useEffect(() => {
        if (!userInfo) {
            history('/login')
            // history("/")
        }
    }, [history])
    return(
        <>
        <nav>
            <div className="container nav__container">
                <Link className='logo' to = '/'>
                    <img src={Logo} alt="" />
                </Link>
                    <ul className='nav__link'>
                        <li className="nav__link">
                            <Link to = {"/"}>Trang Chủ</Link>
                        </li>
                        <li className="nav__link">
                            <Link to = {"/catalog"}>Loại Hàng</Link>
                        </li>
                        <li className="nav__link">
                            <Link to = {"/product"}>Sản Phẩm</Link>
                        </li>
                        <li className="nav__link">
                            <Link to = {"/order"}>Đơn Hàng</Link>
                        </li>
                        <li className="nav__link">
                            <Link to = {"/branch"}>Chi Nhánh</Link>
                        </li>
                        <li className="nav__link">
                            <Link to = {"/user"}>Người Dùng</Link>
                        </li>
                        {
                            userInfo ? (
                            <li className="nav__link">
                                <Link onClick={() => {
                                    localStorage.removeItem("userInfo")
                                    history('/login')}}>Logout</Link>
                            </li>
                            ) : (
                                <li className="nav__link">
                                <Link to = {"/login"}>Đăng Nhập</Link>
                                </li>
                            )
                        }
                    </ul>
                    
                </div>
        </nav>
        <div className="container--fluid container__slide">
            <img src={Slide} alt="" />
        </div></>
    )
}

export default Navbar