import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import './user.css'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const User = () => {
    const [user, setUser] = useState([]);
    const [searchApiData, setSearchApiData] = useState([]);
    useEffect(() => {
          const fetchUser = async () => {
              const {data} = await axios.get('/api/user')
              setUser(data)
              setSearchApiData(data);
          }
          fetchUser();
      }, [])

    const [value, setValue] = useState();
    const deleteUser = async (id) => {
        console.log(id)
        let result = await fetch(`/api/user/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result){
            return user;
        }
    }

    const handleSearch = async (e) => {
        if(e.target.value ===''){
         setUser(searchApiData)
        }else{
            const filterResult = searchApiData.filter(item =>item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.phone.toLowerCase().includes(e.target.value.toLowerCase()));
         setUser(filterResult);
 
        }
        setValue(e.target.value)
     };

     const [page, setPage] = useState(1);
     const [pageSize] = useState(8);
     const indexOfLastItem = page*pageSize;
     const indexOfFirstItem = indexOfLastItem - pageSize;
     const currentItems = user.slice(indexOfFirstItem,indexOfLastItem);
    

    const handlePage = (e,value)=>{
        setPage(value)
    }
    return (
      <div className="container container__type">
              <h1 className="container__item">Danh Sách Tài Khoản</h1>
              <ul className="container__item">
                  <li className="container__item">
                      <Link to = {'/add-user'}>Thêm Tài Khoản</Link>
                  </li>
                  <li className="container__item">
                      <form action="" >
                          <input type="text" placeholder='Tìm kiếm tài khoản' value={value} onChange={(e) => handleSearch(e)}   />
                          <input type="submit" value="Tìm Kiếm"/></form>
                  </li>
              </ul>
              <table className='user'>
                  <tr>
                      <th>Mã Người Dùng</th>
                      <th>Họ Tên</th>
                      <th>Số Điện Thoại</th>
                      <th>Giới Tính</th>
                      <th>Địa Chỉ</th>
                      <th>Chức Năng</th>
                  </tr>
                  
                      {
                          currentItems.map((user, index) => {
                              return (
                                  <tr key={user._id}>
                                      <td><p>{index + 1}</p></td>
                                      <td><p>{user.name}</p></td>
                                      <td><p>{user.phone}</p></td>
                                      <td><p>{user.gender}</p></td>
                                      <td><p>{user.address}</p></td>
                                      <td className='action'>
                                          <button className = "update__item"><Link to={`/user/${user._id}`}>Sửa</Link></button>
                                          <button className = 'delete__item' onClick={() => deleteUser(user._id)}>Xóa</button>
                                      </td>
                                  </tr>
                              )
                          })
                      }
              </table>
              <Stack spacing={2}>
                <Pagination count={(user.length%pageSize===0)?(user.length/pageSize):(Math.floor(user.length/pageSize+1))} page={page}  onChange={handlePage} color="primary" />
            </Stack>
          </div>
  )
}

export default User