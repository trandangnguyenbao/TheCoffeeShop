import { API_BASE_URL } from '../../config';
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

const UserAdd = () => {
    const history = useNavigate();
    const [name, setName] = useState('');
    const [phone , setPhone] = useState('');
    const [gender, setGender] = useState('Nam');
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState('');
    const [isAdmin, setIsAdmin] = useState('true');

    const handleSubmit =  ()=>{
        const data = {
            name: name,
            phone: phone,
            gender: gender,
            password: password,
            address: address, 
            isAdmin: isAdmin
        }

        axios.post(`${API_BASE_URL}/api/user/`,data).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        alert('Thêm User Thành Công');
          history("/user")
    }

  return (
    <div className="container container__add">
        <div className="container__addcontains">
        <h1>Thêm Tài Khoản</h1>
        <form >
            <div className="container__add--item">
                <ul className="container__add--items">
                    <li className="container__add--items">
                        <p>Họ Tên</p>
                        <input type="text" name="" id="" placeholder='Nhập Họ Tên' onChange={e=>setName(e.target.value)}/>
                    </li>
                    <li className="container__add--items">
                        <p>Số Điện Thoại</p>
                        <input type="text" name="" id="" placeholder = 'Nhập Số Điện Thoại' onChange={e=>setPhone(e.target.value)}/>
                    </li>
                </ul>
            </div>
            <div className="container__add--item">
            <ul className="container__add--items">
                    <li className="container__add--items">
                        <p>Mật Khẩu</p>
                        <input type="text" name="" id="" placeholder = 'Nhập Mật Khẩu' onChange={e=>setPassword(e.target.value)}/>
                    </li>
                    <li className="container__add--items">
                    <p>Địa chỉ</p>
                <input type="text" name="" id="" placeholder = 'Nhập Địa Chỉ' onChange={e=>setAddress(e.target.value)}/>
                    </li>
                </ul>  
            </div>
            <div className="container__add--item">
                <ul className="container__add--items">
                    <li className="container__add--items">
                        <p>Giới Tính</p>
                        <select name="" id="" onChange={e => setGender(e.target.value)}>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                        </select>
                    </li>
                    <li className="container__add--items">
                        <p>Phân Quyền</p>
                        <select name="" id="" onChange={e => setIsAdmin(e.target.value)}>
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>
                    </li>
                </ul>
            </div>
            <button type='submit' onClick={handleSubmit}>Thêm Người Dùng</button>
        </form>
        </div>
    </div>
  )
}

export default UserAdd