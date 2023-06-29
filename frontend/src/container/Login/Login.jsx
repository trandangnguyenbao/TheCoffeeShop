import '../SignUp/signup.css';

import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { API_BASE_URL } from '../../config';
import Message from '../../LoadingError/Error';
import UserIcon from '../../images/UserIcon.svg';
import axios from "axios";
import {toast} from "react-toastify"

const Login = () => {
    const history = useNavigate();

    const [phone, setPhone] = useState('')
    const [password, setPassWord] = useState('')
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [phoneError, setPhoneError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");

        if (userInfo) {
            history("/")
        }
    }, [history])
    const submitHandler = async (e) => {
        e.preventDefault();
        const phoneNumberRegex = /^(0|\+84)(\d{9})$/;
        if(phoneNumberRegex.test(phone) && password.length >= 6){
            setPasswordError("")
            setPhoneError("")
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
                toast.success("Đăng nhập thành công")
                localStorage.setItem('userInfo', JSON.stringify(data));
                history("/")
                setLoading(false);
            } catch (error) {
                toast.error("Tài khoản hoặc mật khẩu không đúng!")
                setError(error.response.data.message);
            }
        }
        else{
            const phoneNumberRegex = /^(0|\+84)(\d{9})$/;
            if (phone !== "" && phoneNumberRegex.test(phone)){
                setPhoneError("")
                if (password.length < 6 && password !== ""){
                    setPasswordError('Mật khẩu phải bao gồm tối thiểu 6 chữ số')
                }
                else if (password === "") {
                    setPasswordError("Vui lòng nhập mật khẩu của bạn")
                }
                else{
                    setPasswordError("")
                }    
            }
            else if(phone !== "" && !phoneNumberRegex.test(phone)){
                if (password.length >= 6){
                    setPasswordError("")
                    setPhoneError('Số điện thoại không hợp lệ')
                }
                else if (password === ""){
                    setPasswordError("Vui lòng nhập mật khẩu")
                    setPhoneError('Số điện thoại không hợp lệ')
                }
                else {
                    setPasswordError("Mật khẩu ít nhất 6 ký tự")
                    setPhoneError('Số điện thoại không hợp lệ')
                }
            }
            else if (phone === "" && password.length >= 6) {
                setPhoneError("Vui lòng nhập số điện thoại")
                setPasswordError("")
            }
            else if (phone === "" && password === "") {
                setPasswordError("Vui lòng nhập mật khẩu của bạn")
                setPhoneError("Vui lòng nhập số điện thoại")
            }
            else{
                setPasswordError("Mật khẩu ít nhất 6 ký tự")
                setPhoneError("Vui lòng nhập số điện thoại")
            }
        }
    }
  return (
    <section id='signup'>
        <div className="signup__container">
            <div className="container login">
                <div className='container__signup'>
                <div className="container__signup--header">
                    <img src={UserIcon} alt="" />
                    <h4>Đăng Nhập Tài Khoản</h4>
                </div>
                <div className="container__signup--contain">
                    {error && <Message variant='danger'>{error}</Message>}
                    <form action="" id='form' onSubmit={submitHandler}>
                        <div class="form-control">
                            <label >Số điện thoại: </label>
                            <input type="text" className={(phoneError) ? "error" : ""} placeholder="Nhập số điện thoại" id="phone" autocomplete="username"
                            value={phone} onChange = {(e) => setPhone(e.target.value)} />
                            <p>{(phoneError) ? (phoneError) : ("")}</p>
                        </div>
                        <div class="form-control">
                            <label >Password: </label>
                            <input type="password" className={(passwordError) ? "error" : ""} placeholder='Nhập mật khẩu' name="" id="password" autocomplete="current-password"
                            onChange = {(e) => setPassWord(e.target.value)}/>
                            <p>{(passwordError) ? (passwordError) : ("")}</p>
                        </div>   
                        <div className="loginFrom">
                            <div className="loginForm--duytri">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Duy trì đăng nhập</label>
                            </div>
                            <a href="">Quên mật khẩu</a>
                        </div>       
                        <div className='loginsubmit'><button type='submit' className='loginForm' >Đăng Nhập Tài Khoản</button></div>
                        <span>Bạn chưa có tài khoản? <Link to ='/account/sign-up'>Đăng Ký</Link></span>
                    </form>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Login