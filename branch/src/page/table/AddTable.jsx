import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const AddTable = () => {
    const history = useNavigate();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [Soluong, setSoluong] = useState(0);
    const [note, setNote] = useState('');
    const [chinhanh, setChinhanh] = useState();
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    useEffect(() => {
        if (!userInfo) {
            history("/account/login")
        }
    }, [history])


    // FETCH DATA BRANCH
   const [branch, setBranch] = useState([]);
   useEffect(() => {
    const fetchBranch = async () => {
        const {data} = await axios.get('/api/branch/')
        setBranch(data)
    }
    fetchBranch();
    }, [])

    const handleSubmit =  ()=>{
        const data = {
            name: name,
            phone: phone,
            Soluong: Soluong,
            note: note,
            chinhanh: chinhanh,
        }

        axios.post('/api/orderTable/',data).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        alert('Đặt bàn thành công');
          history("/table")
    }

  return (
    <div className="container container__add">
        <div className="container__addcontains">
        <h1>Đặt Bàn</h1>
        <form onSubmit={handleSubmit}>
            <div className="container__add--item">
                <p>Họ Và Tên</p>
                <input type="text" name="" id="" placeholder='Nhập Tên Khách Hàng' onChange={e=>setName(e.target.value)}/>
            </div>
            <div className="container__add--item">
                <p>Số Điện Thoại</p>
                <input type="text" name="" id="" placeholder = 'Nhập Số Điện Thoại Khách Hàng' onChange={e=>setPhone(e.target.value)}/>
            </div>
            <div className="container__add--item">
                <p>Số Lượng Người</p>
                <input type="Number" name="" id="" min={1} placeholder = 'Nhập số Lượng Người' onChange={e=>setSoluong(e.target.value)}/>
            </div>
            <div className="container__add--item">
                <p>Ghi Chú(Nếu Có)</p>
                <input type="text" name="" id="" placeholder = 'Nhập Ghi Chú(Nếu Có)' onChange={e=>setNote(e.target.value)}/>
            </div>
            {/* <div className="container__add--item">
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
            </div> */}
            <div className="container__add--item">
                <p>Chi Nhánh</p>
                <input type="text" name="" id="" defaultValue={userInfo.chinhanh} onChange={e=>setChinhanh(e.target.value)}/>
                {/* <select name="" id="" onChange={e=>setChinhanh(e.target.value)}>
                    {
                        branch.map((branch, index) => {
                            if (branch.name === userInfo.chinhanh){
                                return (
                                    <option value={branch.name}>{branch.name}</option>
                                )
                            }
                    })
                }
                </select> */}
            </div>
            <button type='submit'>Đặt Bàn</button>
        </form>
        </div>
    </div>
  )
}

export default AddTable