import './product.css'

import { Link, NavLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import { AiTwotoneHeart } from 'react-icons/ai'
import { BsFillBagFill } from 'react-icons/bs'
import axios from 'axios'
import formatProductPrice from '../../Helper'
import url from '../../config'

const Product = () => {
    const [catalog, setCatalog] = useState('Cà Phê Việt Nam')
    const liItem = document.querySelector('li.container__product--menu');
    const handleOnClick = () => {
      if(liItem.classList.contains('active')){
          liItem.classList.remove('active');
      }
      else{
        liItem.classList.add('active');
      }
    }

    const handleCatalog = (e) => {
        const getCatalog = e.target.value;
        setCatalog(getCatalog);
        console.log(getCatalog)
        // setDisTrictId('Quận/Huyện')
    }
    const [Products, setProducts] = useState([]);
    const [Catalogs, setCaTaLogs] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get(`${url}/api/collections/`)
            setProducts(data)
        }
        fetchProducts();
    }, [])
    useEffect(() => {
        const fetchCatalogs = async() => {
            const {data} = await axios.get(`${url}/api/catalog/`)
            setCaTaLogs(data)
        }
        fetchCatalogs();
    }, [])
    return (
      <div className="container container__product col-lg-12 col-md-12 col-sm-12 col-12">
          <select className='container__product--menu col-lg-2 col-md-12 col-sm-12 col-12' onChange={(e) => handleCatalog(e)}>
                {
                    Catalogs?.map(({id,name, path, children}, index) => {
                        return (
                            <option value={name}><NavLink to = {`/collections/${path}`}>{name}</NavLink></option>
                        )
                    })
                }
            </select>
            <ul className="container__product--menu col-lg-2 col-md-12 col-sm-12 col-12 position-sticky" id="">
                {
                    Catalogs?.map(({id,name, path, children}) => {
                        return (
                            <li className="container__product--menu" key={id}>
                                <NavLink to = {`/collections/${path}`} onClick={() => setCatalog(name)} className = "">{name}</NavLink>
                                <ul className="product__menu--child">
                                {
                                    children?.map(({name, path, TypeCatalogParent}, index) => {
                                        return (
                                            <li className="product__menu--child " key={index}>
                                                <NavLink to = {`/collections/${path}`}  className = "" onClick={() => setCatalog(name)} >{name}</NavLink>
                                            </li>
                                        )
                                    })
                                }
                                </ul>
                            </li>
                        )
                    })
                }
            </ul>
  
          <div className="container__product--item col-lg-10 col-md-12 col-sm-12 col-12">
          <div className="container__producthome--item col-lg-12 col-md-12 col-sm-12 col-12 row">
                   {
                        Products?.map((Product) => {
                            if ( Product.catalog === catalog || Product.catalogParent === catalog){
                                return (
                                    <>
                                    <div className="container__producthome--child col-lg-4 col-md-4 col-sm-6 col-6  pt-3 ">
                                    <Link to = {`/product/${Product.path_name}`}><img src= {Product.img} alt="" className="container__producthome--item" />
                                            <ul className='producthome__child-icon'>
                                                <li className="producthome__child-icon">
                                                    <i><AiTwotoneHeart/></i>
                                                </li>
                                                <li className="producthome__child-icon pt-3">
                                                    <i><BsFillBagFill /></i>
                                                </li>
                                            </ul>
                                        </Link>
                                        <p className="container__producthome--title">{Product.title}</p>
                                        <span className="container__producthome--cost">{formatProductPrice(Product.cost)}</span>
                                    </div>
                                    </>
                                    )
                            }
                        })
                    }   
                </div>     
          </div>
      </div>
    )
}

export default Product