import { API_BASE_URL } from '../../config';
import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

const CatalogAdd = () => {
    const history = useNavigate();
    const [typeProduct, setTypeProduct] = useState('');
    const [path, setPath] = useState('');
    const [ProductParent, setTypeProductParent] = useState('');
    const [ descript, setDescript] = useState('');
    const [ image, setImage] = useState('');


    const handleSubmit =  ()=>{
        // const path = nameProduct.replace(/ /g,'-');
        const data = {
            name: typeProduct, 
            path: path, 
            TypeCatalogParent: ProductParent,
            discript: descript, 
            img: image
        }

        axios.post(`${API_BASE_URL}/api/cataloges/`,data).then(function (response) {
            toast.success("Thêm loại hàng thành công!")
          })
          .catch(function (error) {
            toast.error("Thêm loại hàng thất bại!")
            history("/add-catalog")
          });
          history("/catalog")
        
    }

  return (
    <div className="container container__add">
        <div className="container__addcontains">
        <h1>Thêm Loại Hàng</h1>
        <form onSubmit={handleSubmit}>
            <div className="container__add--item">
                <p>Tên Loại Hàng</p>
                <input type="text" name="" id="" placeholder='Nhập Tên Loại Hàng' onChange={e=>setTypeProduct(e.target.value)}/>
            </div>
            <div className="container__add--item">
                <p>Đường Dẫn</p>
                <input type="text" name="" id="" placeholder='Nhập Đường Dẫn' onChange={e=>setPath(e.target.value)}/>
            </div>
            <div className="container__add--item">
                <p>Loại Hàng Cha</p>
                <input type="text" name="" id="" placeholder='Nhập Tên Loại Hàng Cha' onChange={e=>setTypeProductParent(e.target.value)}/>
            </div>
            <div className="container__add--item">
                <p>Mô Tả</p>
                <input type="text" name="" id="" placeholder='Nhập Mô Tả' onChange={e=>setDescript(e.target.value)}/>
            </div>
            <div className="container__add--item">
                <p>Hình Ảnh</p>
                <input type="text" name="" id="" onChange={(e) => setImage(e.target.value) }/>
            </div>

            <button type='submit'>Thêm Loại Hàng</button>
        </form>
        </div>
    </div>
  )
}

export default CatalogAdd