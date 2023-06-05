import { API_BASE_URL } from '../../config';
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

const BranchAdd = () => {
    const history = useNavigate();
    const [name, setName] = useState('');
    // const [path, setPath] = useState('');
    const [countryName, setCountryName] = useState('');
    const [provinceName, setProvinceName] = useState('');
    const [map, setMap] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState('');
    const [ImageSlug, setImageSlug] = useState('')
    // FETCH DATA COUNTRIES
   const [countries, setCountries] = useState([]);
   useEffect(() => {
    const fetchCountry = async () => {
        const {data} = await axios.get(`${API_BASE_URL}/api/country/`)
        setCountries(data)
    }
    fetchCountry();
    }, [])
    // FETCH DATA PROVINCE
   const [province, setProvince] = useState([]);
   useEffect(() => {
    const fetchProvince = async () => {
        const {data} = await axios.get(`${API_BASE_URL}/api/province/`)
        setProvince(data)
    }
    fetchProvince();
    }, [])

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
    
    const handleSubmit =  ()=>{
        const path = name.replace(/ /g,'-');
        const data = {
            name: name,
            path: path, 
            Country_name: countryName,
            Province_name: provinceName, 
            map: map, 
            address: address, 
            image: image
        }

        axios.post(`${API_BASE_URL}/api/branch/`,data).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        alert('Thêm Chi Nhánh Thành Công');
          history("/branch")
    }

  return (
    <div className="container container__add">
        <div className="container__addcontains">
        <h1>Thêm Chi Nhánh</h1>
        <form onSubmit={handleSubmit}>
            <div className="container__add--item">
                <p>Tên Chi Nhánh</p>
                <input type="text" name="" id="" placeholder='Nhập Tên Chi Nhánh' onChange={e=>setName(e.target.value)}/>
            </div>
            <div className="container__add--item">
                <p>Tên Thành Phố</p>
                <select name="" id="" onChange={e=>setCountryName(e.target.value)}>
                    {
                        countries.map((countries, index) => {
                            return (
                                <option value={countries.name}>{countries.name}</option>
                            )
                    })
                }
                </select>
            </div>
            <div className="container__add--item">
                <p>Tên Quận/Huyện</p>
                <select name="" id="" onChange={e=>setProvinceName(e.target.value)}>
                    {
                        province.map((province, index) => {
                            if(province.Country_name === countryName){
                                return (
                                    <option value={province.name} key= {province.province_id}>{province.name}</option>
                                )
                            }
                    })
                }
                </select>
            </div>
            <div className="container__add--item">
                <p>Địa Chỉ</p>
                <input type="text" name="" id=""  onChange={e=>setAddress(e.target.value)}/>
            </div>
            <div className="container__add--item">
                <p>Sơ Đồ Đường Đi</p>
                <input type="text" name="" id=""  onChange={e=>setMap(e.target.value)}/>
            </div>
            <div className="container__add--item">
                <p>Hình Ảnh</p>
                <input type={'file'} name="" id="" onChange={(e) => handleImage(e) }/>
            </div>
            <div className="container__add--item">
                <p>Hình Ảnh</p>
                <input type="text" name="image" id="" value={`../../images/chinhanh/${ImageSlug}`}/>
            </div>
            <button type='submit'>Thêm Chi Nhánh</button>
        </form>
        </div>
    </div>
  )
}

export default BranchAdd