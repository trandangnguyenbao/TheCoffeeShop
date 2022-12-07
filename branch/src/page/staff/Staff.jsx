import React from 'react'
import { Link } from 'react-router-dom'
import './staff.css'
import { useState, useMemo } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import formatProductPrice from '../../Helper/index.js'
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Staff = () => {
    const history = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    useEffect(() => {
        if (!userInfo) {
            history("/account/login")
        }
    }, [history])
    const [Staff, setStaff] = useState([]);
    const [searchApiData, setSearchApiData] = useState([]);
    // const [page, setPage] = useState(1);
    // const [pageSize] = useState(8);
    
    useEffect(() => {
        const fetchStaff = async () => {
            const {data} = await axios.get('/api/staff/')
            setStaff(data);
            setSearchApiData(data);
        }
        fetchStaff();
    }, [])

    const [value, setValue] = useState();

    const handleSearch = async (e) => {
       if(e.target.value ===''){
        setStaff(searchApiData)
       }else{
        const filterResult = searchApiData.filter(item =>item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.phone.toLowerCase().includes(e.target.value.toLowerCase()));
        // const filterResult = searchApiData.filter(item =>item.title.toLowerCase().includes(e.target.value.toLowerCase()) || item.catalog.toLowerCase().includes(e.target.value.toLowerCase()));
        setStaff(filterResult);

       }
       setValue(e.target.value)
    };


    const deleteStaff = async (id) => {
        // console.log(id)
        let result = await fetch(`/api/staff/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result){
            return Staff;
        }
        history('/staff')
    }


     //Phan trang
     const [page, setPage] = useState(1);
     const [pageSize] = useState(8);
     const indexOfLastItem = page*pageSize;
     const indexOfFirstItem = indexOfLastItem - pageSize;
     const currentItems = Staff.slice(indexOfFirstItem,indexOfLastItem);
    

    const handlePage = (e,value)=>{
        setPage(value)
    }

    return (
        <div className="container container__type">
            <h1 className="container__item">Danh Sách Nhân Viên</h1>
            <ul className="container__item">
                <li className="container__item">
                    <Link to = {'/addStaff'}>Thêm Nhân Viên</Link>
                </li>
                <li className="container__item">
                    <form action="" onSubmit={handleSearch}>
                        <input type="text" placeholder='Tìm kiếm sản phẩm' value={value} onChange={(e) => handleSearch(e)} />
                        <input type="submit" value='Tìm kiếm' /></form>
                </li>
            </ul>
            <table className='staff'>
                <tr>
                    <th>STT</th>
                    <th>Tên Nhân Viên</th>
                    <th>SĐT</th>
                    <th>Chi Nhánh</th>
                    <th>Lương</th>
                    <th>Chức Năng</th>
                </tr>
                
                    {
                         currentItems.map((staff, index) => {
                            if (staff.Branch === userInfo.chinhanh)
                            {
                                return (
                                    <tr>
                                        <td><p>{index+1}</p></td>
                                        <td><p>{staff.name}</p></td>
                                        <td><p>{staff.phone}</p></td>
                                        <td><p>{staff.Branch}</p></td>
                                        <td><p>{formatProductPrice(staff.salary)}</p></td>
                                        <td>
                                            <Link className = "update__item" to={`/staff/update/${staff._id}`}>Sửa</Link>
                                            <Link onClick={() => deleteStaff(staff._id)} className = 'delete__item'>Xóa</Link>
                                        </td>
                                    </tr>
                                )
                            }
                        })
                    }
            </table>
            <Stack spacing={2}>
                <Pagination count={(Staff.length%pageSize===0)?(Staff.length/pageSize):(Math.floor(Staff.length/pageSize+1))} page={page}  onChange={handlePage} color="primary" />
            </Stack>
        </div>
      )
}

export default Staff