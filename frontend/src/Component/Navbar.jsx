import './navbar.css'

import { AiOutlineLogin, AiOutlineLogout, AiOutlineShoppingCart } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'
import { MdArrowDropDown, MdOutlineClose } from 'react-icons/md'
import React, { useState } from 'react'

import AccountDropdown from './AccountDropdown'
import {BiUserCircle} from 'react-icons/bi'
import Dropdown from './Dropdown'
import { GoThreeBars } from 'react-icons/go'
import Logo from '../images/logo1.png'
import StoryDropdown from './StoryDropDown'
import { links } from '../data'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [active, setActive] = useState(null);
    const [dropdown, setDropdown] = useState(false);
    const [storydropdown, setStoryDropdown] = useState(false);
    const [accountdropdown, setAccountDropdown] = useState(false);
    const [isNavShowing,setIsNavShowing] = useState(false);
    const history = useNavigate()
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    useEffect(() => {
        if (!userInfo) {
            // history("/account/login")
        }
    }, [history])
    

    // const userInfo = useSelector(state => state.userInfo);
    // const {userLogin} = userInfo;
    // const dispatch = useDispatch()

  return (
    <nav>
        <div className="container nav__container"  >
            <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                {
                    isNavShowing ? <MdOutlineClose /> : <GoThreeBars />
                }
            </button>
            <Link className='logo' to = '/' onClick={() => setIsNavShowing(false)}>
                <img src={Logo} alt="" />
            </Link>
            <div className='nav--phone'>
                <Link to={"/cart"}>
                    <AiOutlineShoppingCart color='#E57905' size={26}/>
                </Link>
                <Link>
                </Link>
            </div>
            <div className='nav--table'>
                <Link to={"/cart"}>
                    <AiOutlineShoppingCart color='#E57905' size={24}/>
                </Link>
                <Link>
                {
                    userInfo ? (
                            <Link className='user' to={"/accountInfo"} style={{fontSize: "18px", color: "#000", fontWeight: "600"}}><BiUserCircle color='#000' size={24} />
                            </Link>
                            ) : (
                            <Link to={"/account/login"} style={{fontSize: "18px", color: "#000", fontWeight: "600"}}>
                                <AiOutlineLogin color='#000' size={24} />
                            </Link>
                            )            
                }
                </Link>
            </div>
            <ul className={`nav__link ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                {
                    links.map((item,index) => {
                        if(item.name === 'Menu' ){
                            return (
                                <li key = {index} onClick = {() => setIsNavShowing (prev => !prev)} onMouseEnter = {() => setDropdown(true)} onMouseLeave = {() => setDropdown(false)}>
                                    <NavLink to = {item.path} className = {`has-child ${active == item && 'active'}`} onClick= {() => setActive(item)}>{item.name}<MdArrowDropDown /></NavLink>
                                    { dropdown && <Dropdown /> }
                                </li>
                            )
                        }
                        else if(item.name === 'Chuyện nhà'){
                            return (
                                <li key = {index} onClick = {() => setIsNavShowing (prev => !prev)} onMouseEnter = {() => setStoryDropdown(true)} onMouseLeave = {() => setStoryDropdown(false)} className = "">
                                    <NavLink to = {item.path} className = {`has-child ${active == item && 'active'}`} onClick= {() => setActive(item)}>{item.name}<MdArrowDropDown /></NavLink>
                                    { storydropdown && <StoryDropdown /> }
                                </li>
                            )
                        }
                        return (
                            <>
                                <li className='icon' onClick={() => setIsNavShowing(prev => !prev)}><MdOutlineClose/></li>
                                <li key = {index} className = "">
                                    <NavLink to = {item.path}
                                    onClick = {() => setIsNavShowing (prev => !prev)}>{item.name}</NavLink>
                                </li>
                            </>    
                        )
                    })
                }
                        {
                            userInfo ? (
                            <>
                                <li className="nav__link nav-respon"  onMouseEnter = {() => setAccountDropdown(true)} onMouseLeave = {() => setAccountDropdown(false)} onClick = {() => setIsNavShowing (prev => !prev)}>
                                    <Link className='has-child' to={"/account/order"}>
                                        <span style={{fontSize: "15px", color: "#000", fontWeight: "600"}}>Đơn hàng</span>
                                    </Link>
                                </li>
                                <li className="nav__link nav-tablet"  onMouseEnter = {() => setAccountDropdown(true)} onMouseLeave = {() => setAccountDropdown(false)} onClick = {() => setIsNavShowing (prev => !prev)}>
                                    <Link to={'/accountInfo'} className='has-child'>{userInfo.phone}
                                        { accountdropdown && <AccountDropdown /> }
                                    </Link>
                                </li>
                                <li className="nav__link nav-tablet-logout" onClick = {() => setIsNavShowing (prev => !prev)}>
                                    <Link to={"/account/login"} className='has-child' onClick={() => {
                                        localStorage.removeItem("userInfo")
                                        }}>
                                        <span style={{fontSize: "15px", color: "#000", fontWeight: "600"}}>Đăng Xuất</span>
                                    </Link>
                                </li>
                            </>
                            ) : (
                                // <>
                                <li className="nav__link"  onMouseEnter = {() => setAccountDropdown(true)} onMouseLeave = {() => setAccountDropdown(false)} onClick = {() => setIsNavShowing (prev => !prev)}>
                                    <Link className='has-child' to={'/account/login'}>Đăng Nhập
                                        { accountdropdown && <AccountDropdown /> }
                                    </Link>
                                </li>
                            )
                        }
            </ul>
            
        </div>
        {/* <Outlet /> */}
    </nav>
    
  )
}

export default Navbar