import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const CatalogUpdate = () => {
    let {id} = useParams()
    const history = useNavigate();

    const [typeProduct, setTypeProduct] = useState('');
    const [path, setPath] = useState('');
    const [ProductParent, setTypeProductParent] = useState('');
    const [ descript, setDescript] = useState('');
    const [ image, setImage] = useState('');

    const handleSubmit = ()=>{
        // const path_name = nameProduct.replace(/ /g,'-');
        const data = {
            name: typeProduct, 
            path: path, 
            TypeCatalogParent: ProductParent,
            discript: descript, 
            img: image
        }

        console.log(id)
        axios.put(`/api/cataloges/update/${id}`,data).then(function (response) {
            console.log(response);
            console.log(id)
          })
          .catch(function (error) {
            console.log(error);
            history("/")
          });
        alert('Cập nhật Loại Hàng Thành Công');
          history("/catalog")
    }

    return (
        <div className="container container__add">
            <div className="container__addcontains">
            <h1>Cập Nhật Loại Hàng</h1>
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
                    <input type="text" name="" id="" placeholder='Nhập Link Ảnh' onChange={(e) => setImage(e.target.value) }/>
                </div>
    
                <button type='submit'>Cập Nhật Loại Hàng</button>
            </form>
            </div>
        </div>
      )
}

export default CatalogUpdate