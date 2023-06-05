import './navbar.css'

import { Link } from 'react-router-dom'
import Logo from '../images/logo1.png'
import React from 'react'
import Slide from '../images/slide1.png'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const history = useNavigate()
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    useEffect(() => {
        if (!userInfo) {
            history('/login')
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
                            <Link to = {"/product"}>Sản phẩm</Link>
                        </li>
                        <li className="nav__link">
                            <Link to = {"/table"}>Đặt Bàn</Link>
                        </li>
                        <li className="nav__link">
                            <Link to = {"/order"}>Đặt Món</Link>
                        </li>
                        <li className="nav__link">
                            <Link to = {"/manage-order"}>Đơn Hàng</Link>
                        </li>
                        <li className="nav__link">
                            <Link to = {"/staff"}>Nhân Viên</Link>
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