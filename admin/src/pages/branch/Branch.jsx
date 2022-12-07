import React from 'react'
import { Link } from 'react-router-dom'
import '../catalog/catalog.css'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import './branch.css'
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Branch = () => {
    const history = useNavigate();
    const [country, setCountry] = useState('TP. Hồ Chí Minh')
    const [disTrict, setDistrict] = useState([])
    const [districtId, setDisTrictId] = useState('Bình Thạnh')
    const [searchApiData, setSearchApiData] = useState([]);

    const handleDistrict = (e) => {
      const getDisTrictName = e.target.value;
      setDisTrictId(getDisTrictName);
   }
   const handleCity = (e) => {
      const getCityName = e.target.value;
      setCountry(getCityName);
      setDisTrictId('Bình Thạnh')
   }
    // FETCH DATA COUNTRIES
   const [countries, setCountries] = useState([]);
   useEffect(() => {
    const fetchCountry = async () => {
        const {data} = await axios.get('/api/country/')
        setCountries(data)
    }
        fetchCountry();
    }, [])
    // FETCH DATA PROVINCE
   const [province, setProvince] = useState([]);
   useEffect(() => {
    const fetchProvince = async () => {
        const {data} = await axios.get('/api/province/')
        setProvince(data)
    }
    fetchProvince();
    }, [])
    // FETCH DATA BRANCH
   const [branch, setBranch] = useState([]);
   useEffect(() => {
    const fetchBranch = async () => {
        const {data} = await axios.get('/api/branch/')
        setBranch(data)
        setSearchApiData(data);
    }
    fetchBranch();
    }, [])


    // DELETE 
    const deleteBranch = async (id) => {
        console.log(id)
        let result = await fetch(`/api/branch/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result){
            return Branch;
        }
        history('/product')
    }
    const [value, setValue] = useState();

    const handleSearch = async(e) => {
        if (e.target.value === ""){
            setBranch(searchApiData);
        }
        else{
            const filterResult = searchApiData.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
            setBranch(filterResult);
        }
        setValue(e.target.value)
    }

    return (
        <div className="container container__type">
            <h1 className="container__item">Danh Sách Chi Nhánh</h1>
            <ul className="container__item">
                <li className="container__item">
                    <Link to = {'/add-branch'}>Thêm chi Nhánh</Link>
                </li>
                <li className="container__item">
                    <form action="">
                    <input type="text" placeholder='Tìm kiếm chi nhánh' value={value} onChange={(e) => handleSearch(e)} />
                    <input type="submit" value='Tìm kiếm' /></form>
                </li>
            </ul>
            <ul className="container__branch--search">
                <li className="container__branch--search">
                    <select className="container__shop--left" onChange={(e) => handleCity(e)}>
                    {
                        countries.map((getcountry) => {
                            return (
                                <option value={getcountry.name} key = {getcountry.country_id}>{getcountry.name}</option>
                            )
                        })
                    }
                    </select>
                </li>
                <li className="container__branch--search">
                <select className="container__shop--left" onChange={(e) => handleDistrict(e)}>
                    {
                        province.map((getprovince) => {
                            if (getprovince.Country_name === country){
                                return (
                                    <option value={getprovince.name} key = {getprovince.province_id}>{getprovince.name}</option>
                                )
                            }
                        })
                    }
                    </select>
                </li>
            </ul>
            <table className='branch'>
                <tr>
                    <th>Mã Chi Nhánh</th>
                    <th>Tên chi Nhánh</th>
                    <th>Hình Ảnh</th>
                    <th>Địa Chỉ</th>
                    <th>Chi Tiết</th>
                    <th>Chức Năng</th>
                </tr>
                <tfoot>
                {
                    branch.map((branchs) => {
                        if (branchs.Province_name == districtId){
                            return (
                                <tr>
                                    <td><p>{branchs.Branch_id}</p></td>
                                    <td><p>{branchs.name}</p></td>
                                    <td><img src={branchs.image} alt="" /></td>
                                    <td><p>{branchs.address}</p></td>
                                    <td><Link to = {`/branch/${branchs.path}`}>Xem chi Tiết</Link></td>
                                    <td>
                                        <Link to={`/branch/update/${branchs._id}`} className = "update__item">Sửa</Link>
                                        <Link onClick={() => deleteBranch(branchs._id)} className = 'delete__item'>Xóa</Link>
                                    </td>
                                </tr>
                            )
                        }
                    })
                }</tfoot>
                
            </table>
        </div>
      )
}

export default Branch