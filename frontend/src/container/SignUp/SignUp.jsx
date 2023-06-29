import './signup.css'

import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

import { API_BASE_URL } from '../../config'
import UserIcon from '../../images/UserIcon.svg'
import { toast } from 'react-toastify'

const SignUp = () => {
    const history = useNavigate();
    const [user, setUser] = useState({
        name: "", phone: "", password: "", confirmPassword: ""
    });

    const [nameError, setNameError] = useState("")
    const [phoneError, setPhoneError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [resetPasswordError, setResetPasswordError] = useState("")

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }
    
    const postData = async (e) => {
        e.preventDefault();
        const phoneNumberRegex = /^(0|\+84)(\d{9})$/;
        if (user.name !== "" && phoneNumberRegex.test(user.phone) && user.password.length >= 6 && user.confirmPassword.length >=6 && user.confirmPassword === user.password){
            const {name, phone, password, confirmPassword} = user;
            const res = await fetch(`${API_BASE_URL}/api/user/register`, {
                method: "POST", 
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    name: name, 
                    phone: phone,
                    password: password,
                    confirmPassword: confirmPassword
                })
            });
            const data = await res.json();
            if (data.status === 400){
                toast.error("Tài Khoản Đã Tồn Tại!")
            }
            else{
                toast.success("Đăng Ký Tài Khoản Thành Công!")
                history("/account/login")
            } 
        }
        else {
            if (user.name !== ""){
                setNameError("")
                if (user.phone !== ""){
                    if(phoneNumberRegex.test(user.phone)){
                        setPhoneError("")
                        if (user.password !== ""){
                            if (user.password.length >= 6){
                                setPasswordError("")
                                if (user.confirmPassword !== ""){
                                    if (user.confirmPassword.length >= 6){
                                        if (user.confirmPassword === user.password){
                                            setResetPasswordError("")
                                        }
                                        else{
                                            setResetPasswordError("Mật khẩu nhập lại không khớp")
                                        }
                                    }
                                    else{
                                        setResetPasswordError("Mật khẩu phải gồm ít nhất 6 ký tự")
                                    }
                                }
                                else{
                                    setResetPasswordError("Vui lòng nhập mật khẩu của bạn")
                                }
                            }
                            else{
                                setPasswordError("Mật khẩu phải gồm ít nhất 6 ký tự")
                                if (user.confirmPassword !== ""){
                                    if (user.confirmPassword.length >= 6){
                                        if (user.confirmPassword === user.password){
                                            setResetPasswordError("")
                                        }
                                        else{
                                            setResetPasswordError("Mật khẩu nhập lại không khớp")
                                        }
                                    }
                                    else{
                                        setResetPasswordError("Mật khẩu phải gồm ít nhất 6 ký tự")
                                    }
                                }
                                else{
                                    setResetPasswordError("Vui lòng nhập mật khẩu của bạn")
                                }
                            }
                        }
                        else{
                            setPasswordError("Vui lòng nhập mật khẩu của bạn")
                            if (user.confirmPassword !== ""){
                                if (user.confirmPassword.length >= 6){
                                    if (user.confirmPassword === user.password){
                                        setResetPasswordError("")
                                    }
                                    else{
                                        setResetPasswordError("Mật khẩu nhập lại không khớp")
                                    }
                                }
                                else{
                                    setResetPasswordError("Mật khẩu phải gồm ít nhất 6 ký tự")
                                }
                            }
                            else{
                                setResetPasswordError("Vui lòng nhập mật khẩu của bạn")
                            }
                        }
                    }
                    else{
                        setPhoneError("Số điện thoại không hợp lệ")
                        if (user.password !== ""){
                            if (user.password.length >= 6){
                                setPasswordError("")
                                if (user.confirmPassword !== ""){
                                    if (user.confirmPassword.length >= 6){
                                        if (user.confirmPassword === user.password){
                                            setResetPasswordError("")
                                        }
                                        else{
                                            setResetPasswordError("Mật khẩu nhập lại không khớp")
                                        }
                                    }
                                    else{
                                        setResetPasswordError("Mật khẩu phải gồm ít nhất 6 ký tự")
                                    }
                                }
                                else{
                                    setResetPasswordError("Vui lòng nhập mật khẩu của bạn")
                                }
                            }
                            else{
                                setPasswordError("Mật khẩu phải gồm ít nhất 6 ký tự")
                                if (user.confirmPassword !== ""){
                                    if (user.confirmPassword.length >= 6){
                                        if (user.confirmPassword === user.password){
                                            setResetPasswordError("")
                                        }
                                        else{
                                            setResetPasswordError("Mật khẩu nhập lại không khớp")
                                        }
                                    }
                                    else{
                                        setResetPasswordError("Mật khẩu phải gồm ít nhất 6 ký tự")
                                    }
                                }
                                else{
                                    setResetPasswordError("Vui lòng nhập mật khẩu của bạn")
                                }
                            }
                        }
                        else{
                            setPasswordError("Vui lòng nhập mật khẩu của bạn")
                            if (user.confirmPassword !== ""){
                                if (user.confirmPassword.length >= 6){
                                    if (user.confirmPassword === user.password){
                                        setResetPasswordError("")
                                    }
                                    else{
                                        setResetPasswordError("Mật khẩu nhập lại không khớp")
                                    }
                                }
                                else{
                                    setResetPasswordError("Mật khẩu phải gồm ít nhất 6 ký tự")
                                }
                            }
                            else{
                                setResetPasswordError("Vui lòng nhập mật khẩu của bạn")
                            }
                        }
                    }
                }
                else{
                    setPhoneError("Vui lòng nhập số điện thoại")
                    if (user.password !== ""){
                        if (user.password.length >= 6){
                            setPasswordError("")
                            if (user.confirmPassword !== ""){
                                if (user.confirmPassword.length >= 6){
                                    if (user.confirmPassword === user.password){
                                        setResetPasswordError("")
                                    }
                                    else{
                                        setResetPasswordError("Mật khẩu nhập lại không khớp")
                                    }
                                }
                                else{
                                    setResetPasswordError("Mật khẩu phải gồm ít nhất 6 ký tự")
                                }
                            }
                            else{
                                setResetPasswordError("Vui lòng nhập mật khẩu của bạn")
                            }
                        }
                        else{
                            setPasswordError("Mật khẩu phải gồm ít nhất 6 ký tự")
                            if (user.confirmPassword !== ""){
                                if (user.confirmPassword.length >= 6){
                                    if (user.confirmPassword === user.password){
                                        setResetPasswordError("")
                                    }
                                    else{
                                        setResetPasswordError("Mật khẩu nhập lại không khớp")
                                    }
                                }
                                else{
                                    setResetPasswordError("Mật khẩu phải gồm ít nhất 6 ký tự")
                                }
                            }
                            else{
                                setResetPasswordError("Vui lòng nhập mật khẩu của bạn")
                            }
                        }
                    }
                    else{
                        setPasswordError("Vui lòng nhập mật khẩu của bạn")
                        if (user.confirmPassword !== ""){
                            if (user.confirmPassword.length >= 6){
                                if (user.confirmPassword === user.password){
                                    setResetPasswordError("")
                                }
                                else{
                                    setResetPasswordError("Mật khẩu nhập lại không khớp")
                                }
                            }
                            else{
                                setResetPasswordError("Mật khẩu phải gồm ít nhất 6 ký tự")
                            }
                        }
                        else{
                            setResetPasswordError("Vui lòng nhập mật khẩu của bạn")
                        }
                    }
                }
            }
            else{
                setNameError('Vui lòng nhập tên của bạn')
                if (user.phone !== ""){
                    if(phoneNumberRegex.test(user.phone)){
                        setPhoneError("")
                        if (user.password !== ""){
                            if (user.password.length >= 6){
                                setPasswordError("")
                                if (user.confirmPassword !== ""){
                                    if (user.confirmPassword.length >= 6){
                                        if (user.confirmPassword === user.password){
                                            setResetPasswordError("")
                                        }
                                        else{
                                            setResetPasswordError("Mật khẩu nhập lại không khớp")
                                        }
                                    }
                                    else{
                                        setResetPasswordError("Mật khẩu phải gồm ít nhất 6 ký tự")
                                    }
                                }
                                else{
                                    setResetPasswordError("Vui lòng nhập mật khẩu của bạn")
                                }
                            }
                            else{
                                setPasswordError("Mật khẩu phải gồm ít nhất 6 ký tự")
                                if (user.confirmPassword !== ""){
                                    if (user.confirmPassword.length >= 6){
                                        if (user.confirmPassword === user.password){
                                            setResetPasswordError("")
                                        }
                                        else{
                                            setResetPasswordError("Mật khẩu nhập lại không khớp")
                                        }
                                    }
                                    else{
                                        setResetPasswordError("Mật khẩu phải gồm ít nhất 6 ký tự")
                                    }
                                }
                                else{
                                    setResetPasswordError("Vui lòng nhập mật khẩu của bạn")
                                }
                            }
                        }
                        else{
                            setPasswordError("Vui lòng nhập mật khẩu của bạn")
                            if (user.confirmPassword !== ""){
                                if (user.confirmPassword.length >= 6){
                                    if (user.confirmPassword === user.password){
                                        setResetPasswordError("")
                                    }
                                    else{
                                        setResetPasswordError("Mật khẩu nhập lại không khớp")
                                    }
                                }
                                else{
                                    setResetPasswordError("Mật khẩu phải gồm ít nhất 6 ký tự")
                                }
                            }
                            else{
                                setResetPasswordError("Vui lòng nhập mật khẩu của bạn")
                            }
                        }
                    }
                    else{
                        setPhoneError("Số điện thoại không hợp lệ")
                        if (user.password !== ""){
                            if (user.password.length >= 6){
                                setPasswordError("")
                                if (user.confirmPassword !== ""){
                                    if (user.confirmPassword.length >= 6){
                                        if (user.confirmPassword === user.password){
                                            setResetPasswordError("")
                                        }
                                        else{
                                            setResetPasswordError("Mật khẩu nhập lại không khớp")
                                        }
                                    }
                                    else{
                                        setResetPasswordError("Mật khẩu phải gồm ít nhất 6 ký tự")
                                    }
                                }
                                else{
                                    setResetPasswordError("Vui lòng nhập mật khẩu của bạn")
                                }
                            }
                            else{
                                setPasswordError("Mật khẩu phải gồm ít nhất 6 ký tự")
                                if (user.confirmPassword !== ""){
                                    if (user.confirmPassword.length >= 6){
                                        if (user.confirmPassword === user.password){
                                            setResetPasswordError("")
                                        }
                                        else{
                                            setResetPasswordError("Mật khẩu nhập lại không khớp")
                                        }
                                    }
                                    else{
                                        setResetPasswordError("Mật khẩu phải gồm ít nhất 6 ký tự")
                                    }
                                }
                                else{
                                    setResetPasswordError("Vui lòng nhập mật khẩu của bạn")
                                }
                            }
                        }
                        else{
                            setPasswordError("Vui lòng nhập mật khẩu của bạn")
                            if (user.confirmPassword !== ""){
                                if (user.confirmPassword.length >= 6){
                                    if (user.confirmPassword === user.password){
                                        setResetPasswordError("")
                                    }
                                    else{
                                        setResetPasswordError("Mật khẩu nhập lại không khớp")
                                    }
                                }
                                else{
                                    setResetPasswordError("Mật khẩu phải gồm ít nhất 6 ký tự")
                                }
                            }
                            else{
                                setResetPasswordError("Vui lòng nhập mật khẩu của bạn")
                            }
                        }
                    }
                }
                else{
                    setPhoneError("Vui lòng nhập số điện thoại")
                    if (user.password !== ""){
                        if (user.password.length >= 6){
                            setPasswordError("")
                            if (user.confirmPassword !== ""){
                                if (user.confirmPassword.length >= 6){
                                    if (user.confirmPassword === user.password){
                                        setResetPasswordError("")
                                    }
                                    else{
                                        setResetPasswordError("Mật khẩu nhập lại không khớp")
                                    }
                                }
                                else{
                                    setResetPasswordError("Mật khẩu phải gồm ít nhất 6 ký tự")
                                }
                            }
                            else{
                                setResetPasswordError("Vui lòng nhập mật khẩu của bạn")
                            }
                        }
                        else{
                            setPasswordError("Mật khẩu phải gồm ít nhất 6 ký tự")
                            if (user.confirmPassword !== ""){
                                if (user.confirmPassword.length >= 6){
                                    if (user.confirmPassword === user.password){
                                        setResetPasswordError("")
                                    }
                                    else{
                                        setResetPasswordError("Mật khẩu nhập lại không khớp")
                                    }
                                }
                                else{
                                    setResetPasswordError("Mật khẩu phải gồm ít nhất 6 ký tự")
                                }
                            }
                            else{
                                setResetPasswordError("Vui lòng nhập mật khẩu của bạn")
                            }
                        }
                    }
                    else{
                        setPasswordError("Vui lòng nhập mật khẩu của bạn")
                        if (user.confirmPassword !== ""){
                            if (user.confirmPassword.length >= 6){
                                if (user.confirmPassword === user.password){
                                    setResetPasswordError("")
                                }
                                else{
                                    setResetPasswordError("Mật khẩu nhập lại không khớp")
                                }
                            }
                            else{
                                setResetPasswordError("Mật khẩu phải gồm ít nhất 6 ký tự")
                            }
                        }
                        else{
                            setResetPasswordError("Vui lòng nhập mật khẩu của bạn")
                        }
                    }
                }
            }
        }
    }
  return (
    <section id='signup'>
        <div className="signup__container">
            <div className="container signups">
                <div className='container__signup'>
                <div className="container__signup--header">
                    <img src={UserIcon} alt="" />
                    <h4>Tài khoản của bạn</h4>
                </div>
                <div className="container__signup--contain">
                    <form method='POST' action="" id='form-register'>
                        <div class="form-control">
                            <label >Tên khách hàng: </label>
                            <input type="text" className={(nameError) ? "error" : ""} placeholder="Nhập tên của bạn" id="username" name='name' value={user.name} onChange = {handleInputs}/>
                            <p>{(nameError) ? (nameError) : ""}</p>
                        </div>
                        <div class="form-control">
                            <label >Số điện thoại: </label>
                            <input type="text" className={(phoneError) ? "error" : ""} placeholder="Nhập số điện thoại" id="phone" name="phone" value={user.phone}onChange = {handleInputs}/>
                            <p>{(phoneError) ? (phoneError) : ""}</p>
                        </div>
                        <div class="form-control">
                            <label >Mật khẩu: </label>
                            <input placeholder='Nhập mật khẩu' className={(passwordError) ? "error" : ""} type="password" id="password" name ="password" value={user.password} onChange = {handleInputs}/>
                            <p>{(passwordError) ? (passwordError) : ""}</p>
                        </div>
                        <div class="form-control">
                            <label >Mật khẩu xác thực: </label>
                            <input placeholder='Nhập lại mật khẩu' className={(resetPasswordError) ? "error" : ""} type="password" name="confirmPassword" id="confirmpassword" value={user.confirmPassword} onChange = {handleInputs}/>
                            <p>{(resetPasswordError) ? (resetPasswordError) : ""}</p>
                        </div>           
                        <div className='submit'><button type='submit' className='signupForm' onClick={postData}>Đăng Ký Tài Khoản</button></div>
                        <span>Bạn đã có tài khoản? <Link to ='/account/login'>Đăng Nhập</Link></span>
                    </form>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}



export default SignUp