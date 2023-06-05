import { useNavigate, useParams } from 'react-router-dom';

import { API_BASE_URL } from '../../config';
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const StaffUpdate = () => {
    let {id} = useParams()
    const history = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    useEffect(() => {
        if (!userInfo) {
            history("/account/login")
        }
    }, [history])

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGenDer] = useState('Nam');
    const [birthday, setBirthDay] = useState('');
    const [address, setAddress] = useState('');
    const [Branch, setBranchs] = useState('');
    const [salary, setSalary] = useState(0);

    const [Staff, setStaff] = useState([]);
    
    useEffect(() => {
        const fetchStaff = async () => {
            const {data} = await axios.get(`${API_BASE_URL}/api/staff/`)
            setStaff(data);
        }
        fetchStaff();
    }, [])

     // FETCH DATA BRANCH
   const [branch, setBranch] = useState([]);
   useEffect(() => {
    const fetchBranch = async () => {
        const {data} = await axios.get(`${API_BASE_URL}/api/branch/`)
        setBranch(data)
    }
    fetchBranch();
    }, [])

    const handleSubmit = ()=>{
        const data = {
            name: name,
            phone: phone,
            gender: gender,
            birthday: birthday,
            address: address,
            Branch: Branch,
            salary: salary,
        }

        // console.log(id)
        axios.put(`${API_BASE_URL}/api/staff/update/${id}`,data).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
            history("/")
          });
        alert('Cập nhật thông tin nhân viên thành công');
          history("/staff")
    }

  return (
    <div className="container container__add">
        <div className="container__addcontains">
        <h1>Cập Nhật Nhân Viên</h1>
        <form onSubmit={handleSubmit}>
            <div className="container__add--item">
                <p>Họ Và Tên</p>
                {
                    Staff.map((staff) => {
                        if (staff._id === id){
                            return (
                                <input type="text" name="name" id="" defaultValue={staff.name} required onChange={e=>setName(e.target.value)}/>
                            )
                        }
                    })
                }
            </div>
            <div className="container__add--item">
                <p>Số Điện Thoại</p>
                {
                    Staff.map((staff) => {
                        if (staff._id === id){
                            return (
                                <input type="text" name="phone" id="" defaultValue={staff.phone} required onChange={e=>setPhone(e.target.value)}/>
                            )
                        }
                    })
                }
            </div>
            <div className="container__add--item">
                <ul className="container__add--items">
                    <li className="container__add--items">
                    <p>Địa Chỉ</p>
                    {
                        Staff.map((staff) => {
                            if (staff._id === id){
                                return (
                                    <input type="text" name="address" id="" defaultValue={staff.address} required onChange={e=>setAddress(e.target.value)}/>
                                )
                            }
                        })
                    }
                    </li>
                    <li className="container__add--items">
                        <p>Lương</p>
                        {
                            Staff.map((staff) => {
                                if (staff._id === id){
                                    return (
                                        <input type="Number" name="" id="" min={1000000} defaultValue= {staff.salary} onChange={e=>setSalary(e.target.value)}/>
                                    )
                                }
                            })
                        }
                    </li>
                </ul>  
            </div>
            <div className="container__add--item">
                <p>Chi Nhánh</p>
                <input type="text" name="" id="" defaultValue={userInfo.chinhanh} onChange={e=>setBranchs(e.target.value)}/>
            </div>
            <div className="container__add--item">
                <ul className="container__add--items">
                    <li className="container__add--items">
                        <p>Giới tính</p>
                        <select name="" id="" onChange={e=>setGenDer(e.target.value)}>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                        </select>
                    </li>
                    <li className="container__add--items">
                        <p>Ngày Sinh</p>
                        {
                            Staff.map((staff) => {
                                if (staff._id === id){
                                    return (
                                        <input type="date" name="" id=""  defaultValue= {staff.birthday} onChange={e=>setBirthDay(e.target.value)}/>
                                    )
                                }
                            })
                        }
    
                    </li>
                </ul>  
            </div>
            <button type='submit'>Cập Nhật Lịch Hẹn</button>
        </form>
        </div>
    </div>
  )
}

export default StaffUpdate