import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UserUpdate = ({match}) => {
    let {id} = useParams()
    const history = useNavigate();

    const [name, setName] = useState('');
    const [phone , setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState('');

    const [user, setUser] = useState([]);
    // const [user, setUser] = useState([]);
    useEffect(() => {
          const fetchUser = async () => {
              const {data} = await axios.get('/api/user')
              setUser(data)
          }
          fetchUser();
      }, [])

    const handleSubmit = ()=>{
        const data = {
            name: name,
            phone: phone,
            gender: gender,
            password: password,
            address: address, 
        }

        // console.log(id)
        axios.put(`/api/user/update/${id}`,data).then(function (response) {
            console.log(response);
            console.log(id)
          })
          .catch(function (error) {
            console.log(error);
            history("/")
          });
        alert('Cập nhật User Thành Công');
          history("/user")
    }

  return (
    <div className="container container__add">
        <div className="container__addcontains">
        <h1>Cập Nhật Tài Khoản</h1>
        <form >
            <div className="container__add--item">
                <ul className="container__add--items">
                    <li className="container__add--items">
                        <p>Họ Tên</p>
                        {
                            user.map((user) => {
                                if (user._id === id){
                                    return (
                                        <input type="text" name="" id="" placeholder={user.name}  onChange={e=>setName(e.target.value)}/>
                                    )
                                }
                            })
                        }
                    </li>
                    <li className="container__add--items">
                        <p>Số Điện Thoại</p>
                        {
                            user.map((user) => {
                                if (user._id === id){
                                    return (
                                        <input type="text" name="" id="" placeholder = {user.phone} onChange={e=>setPhone(e.target.value)}/>
                                    )
                                }
                            })
                        }
                    </li>
                </ul>
            </div>
            <div className="container__add--item">
                <p>Mật Khẩu</p>
                        {
                            user.map((user) => {
                                if (user._id === id){
                                    return (
                                        <input type="text" name="" id="" placeholder = {user.password} onChange={e=>setPassword(e.target.value)}/>
                                    )
                                }
                            })
                        }      
            </div>
            <div className="container__add--item">
                <p>Địa chỉ</p>
                {
                    user.map((user) => {
                        if (user._id === id){
                            return (
                                <input type="text" name="" id="" placeholder = {user.address} onChange={e=>setAddress(e.target.value)}/>
                            )
                        }
                    })
                }       
            </div>
            <div className="container__add--item">
                        <p>Giới Tính</p>
                        <select name="" id="" onChange={e => setGender(e.target.value)}>
                            {
                                user.map((user) => {
                                    if (user._id === id){
                                        return (
                                            <>
                                            <option value={user.gender}>{user.gender}</option>
                                            <option value="Nam">Nam</option>
                                            <option value="Nữ">Nữ</option>
                                            </>
                                        )
                                    }
                                })
                            }
                        </select>
            </div>
            <button type='submit' onClick={handleSubmit}>Cập nhật thông tin</button>
        </form>
        </div>
    </div>
  )
}

export default UserUpdate