import { useNavigate, useParams } from 'react-router-dom';

import { API_BASE_URL } from '../../config';
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const ProductUpdate = () => {
    let {id} = useParams()
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

    const [Products, setProducts] = useState([]);
    // const [page, setPage] = useState(1);
    // const [pageSize] = useState(8);
    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get(`${API_BASE_URL}/api/collections/`)
            setProducts(data)
        }
        fetchProducts();
    }, [])

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

    const handleSubmit = ()=>{
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

        // console.log(id)
        axios.put(`${API_BASE_URL}/api/collections/update/${id}`,data).then(function (response) {
            console.log(response);
            console.log(id)
          })
          .catch(function (error) {
            console.log(error);
            history("/")
          });
        alert('Cập nhật Sản Phẩm Thành Công');
          history("/product")
    }

  return (
    <div className="container container__add">
        <div className="container__addcontains">
        <h1>Cập Nhật Sản Phẩm</h1>
        <form onSubmit={handleSubmit}>
            <div className="container__add--item">
                <p>Tên Sản Phẩm</p>
                {
                    Products.map((product) => {
                        if (product._id === id){
                            return (
                                <input type="text" name="" id="" defaultValue={product.title} onChange={e=>setnameProduct(e.target.value)}/>
                            )
                        }
                    })
                }
            </div>
            <div className="container__add--item">
                <p>Giá Sản Phẩm</p>
                {
                    Products.map((product) => {
                        if (product._id === id){
                            return (
                                <input type="Number" name="" id="" min={35000} defaultValue= {product.cost} onChange={e=>setpriceProduct(e.target.value)}/>
                            )
                        }
                    })
                }
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
                {
                    Products.map((product) => {
                        if (product._id === id){
                            return (
                                <input type="text" name="" id="" defaultValue={product.descript} onChange={e=>setDescription(e.target.value)}/>
                            )
                        }
                    })
                }
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

export default ProductUpdate