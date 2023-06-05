import { useNavigate, useParams } from 'react-router-dom';

import { API_BASE_URL } from '../../config';
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const BranchUpdate = () => {
    let {id} = useParams()
    const history = useNavigate();
    const [name, setName] = useState('');
    const [map, setMap] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState('');
    const [staff, setStaff] = useState(0);
    const [doanhthu, setDoanhThu] = useState(0);
    const [ImageSlug, setImageSlug] = useState('')

    // FETCH DATA BRANCH
   const [branch, setBranch] = useState([]);
   useEffect(() => {
    const fetchBranch = async () => {
        const {data} = await axios.get(`${API_BASE_URL}/api/branch/`)
        setBranch(data)
    }
    fetchBranch();
    }, [])

    const handleImage = (e) => {
        var imageSlug = e.target.value.slice(12);
        // console.log(imageSlug)
        setImageSlug(imageSlug)
        var imageValue = document.querySelector("input[name = 'image']").value;
        // console.log(imageValue);
        setImage(imageValue);
        // console.log(image)
    }
    
    const handleSubmit = ()=>{
        const path = name.replace(/ /g,'-');
        const data = {
            name: name,
            path: path, 
            staff: staff, 
            doanhthu: doanhthu,
            map: map, 
            address: address, 
            image: image
        }

        // console.log(id)
        axios.put(`${API_BASE_URL}/api/branch/update/${id}`,data).then(function (response) {
            console.log(response);
            console.log(id)
          })
          .catch(function (error) {
            console.log(error);
            history("/")
          });
        alert('Cập nhật Chi Nhánh Thành Công');
          history("/branch")
    }

  return (
    <div className="container container__add">
        <div className="container__addcontains">
        <h1>Cập Nhật Chi Nhánh</h1>
        <form onSubmit={handleSubmit}>
            <div className="container__add--item">
                <p>Tên Chi Nhánh</p>
                {
                    branch.map((branch) => {
                        if (branch._id === id ){
                            return(
                                <input type="text" name="" id="" defaultValue={branch.name} onChange={e=>setName(e.target.value)}/>
                            )
                        }  
                    })
                }
            </div>
            <div className="container__add--item">
                <p>Nhân Viên</p>
                {
                    branch.map((branch) => {
                        if (branch._id === id ){
                            return(
                                <input type='number' name="" id=""  min={'5'} defaultValue= {branch.staff} onChange={e=>setStaff(e.target.value)}/>
                            )
                        }  
                    })
                }
            </div>
            <div className="container__add--item">
                <p>Doanh Thu</p>
                {
                    branch.map((branch) => {
                        if (branch._id === id ){
                            return(
                                <input type='number' name="" id=""  min={'1000000'} defaultValue= {branch.doanhthu} onChange={e=>setDoanhThu(e.target.value)}/>
                            )
                        }  
                    })
                }
            </div>
            <div className="container__add--item">
                <p>Địa Chỉ</p>
                {
                    branch.map((branch) => {
                        if (branch._id === id ){
                            return(
                                <input type="text" name="" id="" defaultValue={branch.address}  onChange={e=>setAddress(e.target.value)}/>
                            )
                        }  
                    })
                }
            </div>
            <div className="container__add--item">
                <p>Sơ Đồ Đường Đi</p>
                {
                    branch.map((branch) => {
                        if (branch._id === id ){
                            return (
                                <input type="text" name="" id="" defaultValue={branch.map}  onChange={e=>setMap(e.target.value)}/>
                            )
                        }  
                    })
                }
            </div>
            <div className="container__add--item">
                <p>Hình Ảnh</p>
                <input type={'file'} name="" id="" onChange={(e) => handleImage(e) }/>
            </div>
            <div className="container__add--item">
                <p>Hình Ảnh</p>
                <input type="text" name="image" id="" value={`../../images/chinhanh/${ImageSlug}`}/>
            </div>
            <button type='submit'>Cập Nhật Chi Nhánh</button>
        </form>
        </div>
    </div>
  )
}

export default BranchUpdate