import { API_BASE_URL } from '../../config';
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

// import { set } from 'mongoose';


const ProductAdd = () => {
    const history = useNavigate();
    const [nameProduct, setnameProduct] = useState('');
    const [priceProduct, setpriceProduct] = useState('');
    const [typeProduct, settypeProduct] = useState('Cà Phê Việt Nam');
    const [typeProductParent, settypeProductParent] = useState('Cà Phê');
    const [ description, setDescription] = useState('');
    const [Catalogs, setCaTaLogs] = useState([]);
    const [CatalogParent, setCatalogParent] = useState([]);
    const [image, setImage] = useState("")
    const [ImageSlug, setImageSlug] = useState('sp1.jpg')

    useEffect(() => {
        const fetchCatalogs = async() => {
            const {data} = await axios.get(`${API_BASE_URL}/api/cataloges/`)
            setCaTaLogs(data)
        }
        fetchCatalogs();
    }, [])

    useEffect(() => {
        const fetchCatalogParent = async() => {
            const {data} = await axios.get(`${API_BASE_URL}/api/catalog/`)
            setCatalogParent(data)
        }
        fetchCatalogParent();
    }, [])

    const handleParentTypeProduct = (e) => {
        const getParentTypeProduct = e.target.value;
        settypeProductParent(getParentTypeProduct);
    }


    const handleImage = (e) => {
        var imageSlug = e.target.value.slice(12);
        // console.log(imageSlug)
        setImageSlug(imageSlug)
        var imageValue = document.querySelector("input[name = 'image']").value;
        // console.log(imageValue);
        setImage(imageValue);
        // console.log(image)
    }
    
    console.log(image)
    // var images = imageValue
    // setImage(images);
    const handleSubmit =  ()=>{
        const path_name = nameProduct.replace(/ /g,'-');
        const data = {
            title: nameProduct,
            path_name: path_name,
            cost: priceProduct,
            catalog: typeProduct,
            img: image,
            catalogParent:typeProductParent,
            descript: description,
        }

        axios.post(`${API_BASE_URL}/api/collections/`,data).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        alert('Thêm Sản Phẩm Thành Công');
          history("/order")
    }

  return (
    <div className="container container__add">
        <div className="container__addcontains">
        <h1>Thêm Sản Phẩm</h1>
        <form onSubmit={handleSubmit}>
            <div className="container__add--item">
                <p>Tên Sản Phẩm</p>
                <input type="text" name="" id="" placeholder='Nhập Tên Sản Phẩm' onChange={e=>setnameProduct(e.target.value)}/>
            </div>
            <div className="container__add--item">
                <p>Giá Sản Phẩm</p>
                <input type="Number" name="" id="" min={35000} placeholder = '35000' onChange={e=>setpriceProduct(e.target.value)}/>
            </div>
            <div className="container__add--item">
                <p>Loại Sản Phẩm Chính</p>
                <select name="" id="" onChange={(e)=>handleParentTypeProduct(e)}>
                    {
                        CatalogParent.map((catalog, index) => {
                                    return (
                                        <option value={catalog.name}>{catalog.name}</option>
                                   )
                    })
                }
                </select>
            </div>
            <div className="container__add--item">
                <p>Loại Sản Phẩm</p>
                <select name="" id="" onChange={e=>settypeProduct(e.target.value)}>
                    {
                        Catalogs.map((catalog, index) => {
                            if(catalog.TypeCatalogParent === typeProductParent){
                                return (
                                    <option value={catalog.name}>{catalog.name}</option>
                                )
                            }
                    })
                }
                </select>
            </div>
            <div className="container__add--item">
                <p>Mô Tả</p>
                <input type="text" name="" id=""  onChange={e=>setDescription(e.target.value)}/>
            </div>
            <div className="container__add--item">
                <p>Hình Ảnh</p>
                {/* <input type={'file'} name="" id="" onChange={(e) => setImageSlug(e.target.value.slice(12))} /> */}
                <input type={'file'} name="" id="" onChange={(e) => handleImage(e) }/>
            </div>
            <div className="container__add--item">
                <p>Hình Ảnh</p>
                {
                    Catalogs.map((catalog) => {
                        if (catalog.name === typeProductParent){
                            return (
                                <input type="text" name="image" id="" value={`../../images/${catalog.path}/${ImageSlug}`}/>
                            )
                        }
                    })
                }
                
            </div>
            <button type='submit'>Thêm Sản Phẩm</button>
        </form>
        </div>
    </div>
  )
}

export default ProductAdd