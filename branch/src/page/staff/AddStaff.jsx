import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const AddStaff = () => {
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

    // FETCH DATA BRANCH
   const [branch, setBranch] = useState([]);
   useEffect(() => {
    const fetchBranch = async () => {
        const {data} = await axios.get('/api/branch/')
        setBranch(data)
    }
    fetchBranch();
    }, [])

    const idBranch = branch.map((branch) => {
        if (branch.name == userInfo.chinhanh){
            return branch._id
        }
    })
    const id = idBranch[0];

    const NhanVien = branch.map((branch) => {
        if (branch.name == userInfo.chinhanh) {
            return branch.staff
        }
    })

    const NhanVienBranch = NhanVien[0];
    const handleSubmit =  ()=>{
        const staff = NhanVienBranch + 1;
        const data = {
            name: name,
            phone: phone,
            gender: gender,
            birthday: birthday,
            address: address,
            Branch: Branch,
            salary: salary,
        }

        const datas = {
            staff: staff,
        }

        axios.post('/api/staff/',data).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        alert('Thêm Nhân Viên Thành Công');
          history("/staff")

        // Cập Nhật Chi Nhánh
          axios.put(`/api/branch/update/${id}`,datas).then(function (response) {
            console.log(response);
            console.log(id)
          })
          .catch(function (error) {
            console.log(error);
            history("/")
          });
        alert('Cập nhật Chi Nhánh Thành Công');
    }

  return (
    <div className="container container__add">
        <div className="container__addcontains">
        <h1>Thêm Nhân Viên</h1>
        <form onSubmit={handleSubmit}>
            <div className="container__add--item">
                <p>Họ Và Tên</p>
                <input type="text" name="" id="" placeholder='Nhập Tên Nhân Viên' onChange={e=>setName(e.target.value)}/>
            </div>
            <div className="container__add--item">
                <p>Số Điện Thoại</p>
                <input type="text" name="" id="" placeholder = 'Nhập Số Điện Thoại' onChange={e=>setPhone(e.target.value)}/>
            </div>
            <div className="container__add--item">
                <ul className="container__add--items">
                    <li className="container__add--items">
                        <p>Địa Chỉ</p>
                        <input type="text" name="" id="" placeholder = 'Nhập Địa Chỉ' onChange={e=>setAddress(e.target.value)}/>
                    </li>
                    <li className="container__add--items">
                        <p>Lương</p>
                        <input type="Number" name="" id="" min={1000000} placeholder = 'Nhập Lương Nhân Viên' onChange={e=>setSalary(e.target.value)}/>
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
                        <input type="date" name="" id="" placeholder='dd-mm-yyyy' onChange={e=> setBirthDay(e.target.value)} />
                    </li>
                </ul>  
            </div>
            <button type='submit'>Đặt Bàn</button>
        </form>
        </div>
    </div>
  )
}

export default AddStaff