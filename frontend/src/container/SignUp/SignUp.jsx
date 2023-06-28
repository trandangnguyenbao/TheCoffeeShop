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

    let name, value;

    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }
    
    const postData = async (e) => {
        e.preventDefault();

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
                            <input type="text" placeholder="Nhập tên của bạn" id="username" name='name' value={user.name} onChange = {handleInputs}/>
                        </div>
                        <div class="form-control">
                            <label >Số điện thoại: </label>
                            <input type="text" placeholder="Nhập số điện thoại" id="phone" name="phone" value={user.phone}onChange = {handleInputs}/>
                        </div>
                        <div class="form-control">
                            <label >Mật khẩu: </label>
                            <input placeholder='Nhập mật khẩu' type="password" id="password" name ="password" value={user.password} onChange = {handleInputs}/>
                        </div>
                        <div class="form-control">
                            <label >Mật khẩu xác thực: </label>
                            <input placeholder='Nhập lại mật khẩu' type="password" name="confirmPassword" id="confirmpassword" value={user.confirmPassword} onChange = {handleInputs}/>
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