import './chitiet.css'

import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { API_BASE_URL } from '../../config'
import { Skeleton } from 'antd'
import axios from 'axios'
import formatProductPrice from '../../Helper'
import productData from '../../asset/fake-data/Product'

const Chitiet = ({match, history}) => { 
  const [Products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get(`${API_BASE_URL}/api/collections/`)
            setProducts(data)
        }
        fetchProducts();
    }, [])
    const [Catalogs, setCaTaLogs] = useState([]);
    useEffect(() => {
        const fetchCatalogs = async() => {
            const {data} = await axios.get(`${API_BASE_URL}/api/cataloges/`)
            setCaTaLogs(data)
        }
        fetchCatalogs();
    }, [])
  const {path_name} = useParams(); 
  const [active, setActive] = useState(null);
  let itemSize = document.querySelector('li.item__size--select')
  const handleSelectSize = () => {
    if(itemSize.classList.contains('active')){
      itemSize.classList.remove('active');
  }
    else{
      itemSize.classList.add('active');
    }

    console.log(itemSize)
  }

  const [soluong, setSoluong] = useState(1);
  const [addCost, setAddCost] = useState(0);
  const [costProduct, setCostProduct] = useState(Products.cost)
  var [costAfterAdd, setCostAffterAdd] = useState(0);
//   console.log(costAfterAdd);

 const size = document.querySelector('ul.item__size--select li');
  const handleActive = () => {
    if (size.classList.contains('active')){
        size.classList.remove('active');
    }
    else{
        size.classList.add('active')
    }
  }

  const cart = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="container container__detail col-lg-12 col-md-12 col-sm-12 col-12">
        {
          (Products.length > 0 && Catalogs.length > 0) ? (
            Products.map((product) => {
              product.quantity = 1
              if (product.path_name === path_name){
                let categories = Catalogs.find(item => item.name == product.catalog)
                return(
                  <>
                    <nav aria-label="breadcrumb" className='breakcrum'>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to={"/"}>Trang chủ</Link></li>
                        <li class="breadcrumb-item"><Link to={`/collections/${categories.path}`}>{product.catalog}</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">{product.title}</li>
                      </ol>
                    </nav>
                    <div className="container__detail--item col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="detail__item--child col-lg-5 col-md-12 col-sm-12 col-12">
                        <img src={product.img} alt="" className="item__child--large" />
                        <img src={product.img} alt="" className="item__child--small" />
                    </div>
                    <div className="detail__item--child col-lg-7 col-md-12 col-sm-12 col-12">
                        <h2 className="detail__item--title">{product.title}</h2>
                        <h2 className="detail__item--cost">{formatProductPrice(product.cost) || formatProductPrice(product.cost = costAfterAdd)}</h2>
                      <div className="detail__item--amount">
                        <p>Số Lượng: </p>
                        <input type="number" defaultValue= {product.quantity} name='quantity' min = '1' max = '100' onChange={(e) => setSoluong(e.target.value)}/>
                      </div>
                      <div className="detail__item--descript">
                        <p>Mô Tả Sản Phẩm</p>
                        <span>{product.descript}</span>
                      </div>
                      <Link to={'/cart'}><button onClick ={() => dispatch({type: "ADD", payload: product})}>Thêm vào giỏ hàng</button></Link>
                    </div>
                    </div>  
                  </>
                )
              }
            })  
          ) : (
            <Skeleton paragraph={{
              rows: 6,
            }}/>
          )
        }
       
        <hr />
        <div className="container__description col-lg-12 col-md-12 col-sm-12 col-12">
             <div className="container__description--product col-lg-12 col-md-12 col-sm-12 col-12">
                  <h3 style={{fontWeight: "bolder", fontSize: "24px"}}>Mô Tả Sản Phẩm</h3>
                  {
                    (Products.length > 0) ? (
                    Products.map((product) => {
                    if (product.path_name === path_name){
                    return (
                        <p>{product.descript}</p>
                    )}
                    })) : (
                      <Skeleton paragraph={{
                        rows: 4,
                      }}/>
                    )
                  }
             </div>
             <hr />
             <div className="container__description--relate">
                  <h3 style={{fontWeight: "bolder", fontSize: "24px"}}>Sản phẩm liên quan</h3>
                  <div className="container__description--relate--product">
                    {
                      (Products.length > 0) ? (
                        productData.getProducts(6).map((item, index) => {
                          return (
                            <div className="description--relate--product--item col-lg-2 col-md-3 col-sm-6 col-6 pb-3 px-2">
                            <Link to={`/product/${item.path_name}`}><img src={item.img} alt="" />
                            <p>{item.title}</p>
                            <span>{item.price}</span></Link>
                          </div>
                          )
                        })
                      ) : (
                        <Skeleton paragraph={{
                          rows: 4,
                        }}/>
                      )
                    }
                  </div>
             </div>
        </div>
    </div>
  )
}

export default Chitiet