import { useNavigate, useParams } from 'react-router-dom';

import { API_BASE_URL } from '../../config';
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const TableUpdate = () => {
    let {id} = useParams()
    const history = useNavigate();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [Soluong, setSoluong] = useState(0);
    const [note, setNote] = useState('');
    const [chinhanh, setChinhanh] = useState();
    const [countryName, setCountryName] = useState('');

     // FETCH DATA COUNTRIES
   const [countries, setCountries] = useState([]);
   useEffect(() => {
    const fetchCountry = async () => {
        const {data} = await axios.get(`${API_BASE_URL}/api/country/`)
        setCountries(data)
    }
    fetchCountry();
    }, [])

    const [OrderTable, setOrderTable] = useState([]);
    
    useEffect(() => {
        const fetchOrderTable = async () => {
            const {data} = await axios.get(`${API_BASE_URL}/api/ordertable/`)
            setOrderTable(data);
        }
        fetchOrderTable();
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
            Soluong: Soluong,
            note: note,
            chinhanh: chinhanh,
        }

        // console.log(id)
        axios.put(`${API_BASE_URL}/api/orderTable/update/${id}`,data).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
            history("/")
          });
        alert('Cập nhật lịch hẹn thành công');
          history("/table")
    }

  return (
    <div className="container container__add">
        <div className="container__addcontains">
        <h1>Cập Nhật Lịch Hẹn</h1>
        <form onSubmit={handleSubmit}>
            <div className="container__add--item">
                <p>Họ Và Tên</p>
                {
                    OrderTable.map((orderTable) => {
                        if (orderTable._id === id){
                            return (
                                <input type="text" name="name" id="" defaultValue={orderTable.name} required onChange={e=>setName(e.target.value)}/>
                            )
                        }
                    })
                }
            </div>
            <div className="container__add--item">
                <p>Số Điện Thoại</p>
                {
                    OrderTable.map((orderTable) => {
                        if (orderTable._id === id){
                            return (
                                <input type="text" name="" id="" defaultValue={orderTable.phone} required onChange={e=>setPhone(e.target.value)}/>
                            )
                        }
                    })
                }
            </div>
            <div className="container__add--item">
                <p>Số Lượng Người</p>
                {
                    OrderTable.map((orderTable) => {
                        if (orderTable._id === id){
                            return (
                                <input type="Number" name="" id="" min={1} defaultValue= {orderTable.Soluong} required onChange={e=>setSoluong(e.target.value)}/>
                            )
                        }
                    })
                }
            </div>
            <div className="container__add--item">
                <p>Ghi Chú (Nếu Có)</p>
                {
                    OrderTable.map((orderTable) => {
                        if (orderTable._id === id){
                            return (
                                <input type="text" name="" id="" defaultValue={orderTable.note} required onChange={e=>setNote(e.target.value)}/>
                            )
                        }
                    })
                }
            </div>
            <div className="container__add--item">
                <p>Chọn Thành Phố</p>
                <select name="" id="" onChange={e=>setCountryName(e.target.value)}>
                    {
                        countries.map((countries, index) => {
                            return (
                                <option value={countries.name}>{countries.name}</option>
                            )
                    })
                }
                </select>
            </div>
            <div className="container__add--item">
                <p>Chi Nhánh</p>
                {
                    OrderTable.map((orderTable) => {
                        if (orderTable._id === id) {
                            return (
                                <select name="" id="" onChange={e=>setChinhanh(e.target.value)}>
                                    {
                                        branch.map((branch, index) => {
                                            if (branch.Country_name === countryName){
                                                return (
                                                    <option value={branch.name}>{branch.name}</option>
                                                )
                                            }
                                        })
                                    }
                                </select>
                            )
                        }
                    })
                }
            </div>
            <button type='submit'>Cập Nhật Lịch Hẹn</button>
        </form>
        </div>
    </div>
  )
}

export default TableUpdate