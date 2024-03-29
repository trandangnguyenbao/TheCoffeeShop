import './signup.css';

import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { API_BASE_URL } from '../../config';
import UserIcon from '../../images/UserIcon.svg';
import axios from "axios";
import { toast } from 'react-toastify';

const Login = () => {
    const history = useNavigate();

    const [phone, setPhone] = useState('')
    const [password, setPassWord] = useState('')
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");

        if (userInfo) {
            history("/")
        }
    }, [history])
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            setLoading(true)

            const { data } = await axios.post(`${API_BASE_URL}/api/user/login`, {
                phone, password
            }, config)
            localStorage.setItem('userInfo', JSON.stringify(data));
            toast.success("Đăng Nhập Thành Công!")
            history("/")
        } catch (error) {
            toast.error("Đăng Nhập Thất Bại!")
            setError(error.response.data.message);
        }
    }
  return (
    <section id='signup'>
        <div className="container login">
            <div className='container__signup'>
            <div className="container__signup--header">
                <img src={UserIcon} alt="" />
                <h4>Đăng Nhập Tài Khoản</h4>
            </div>
            <div className="container__signup--contain">
                {/* {error && <Message variant='danger'>{error}</Message>} */}
                <form action="" id='form' onSubmit={submitHandler}>
                    <div class="form-control">
                        <label >Số điện thoại: </label>
                        <input type="text" placeholder="Nhập số điện thoại" id="phone"
                        value={phone} onChange = {(e) => setPhone(e.target.value)} />
                        {/* <small>{validationMsg.phone}</small> */}
                    </div>
                    <div class="form-control">
                        <label >Password: </label>
                        <input type="password" name="" id="password" 
                        value={password} onChange = {(e) => setPassWord(e.target.value)}/>
                        {/* <small>{validationMsg.password}</small> */}
                    </div>   
                    <div className="loginFrom">
                        <div className="loginForm--duytri">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Duy trì đăng nhập</label>
                        </div>
                        <a href="">Quên mật khẩu</a>
                    </div>       
                        <div className='loginsubmit'><button type='submit' className='loginForm' >Đăng Nhập Tài Khoản</button></div>
                    <span>Bạn chưa có tài khoản? <Link to = '/account/Sign-up'>Đăng Ký</Link> </span>
                </form>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Login