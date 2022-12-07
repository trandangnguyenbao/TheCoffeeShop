import express from "express";
import User from './Models/UserModel.js';
import users from './data/user.js';
import Products from "./Models/ProductModel.js";
import Product from './data/ProductForCatalog.js'
import Catalog from "./Models/Catalog.js";
import Catalogs from "./data/Catalog.js";
import States from "./Models/StateModel.js";
import State from './data/State.js'
import Story from "./data/Story.js";
import Stories from "./Models/StoryModel.js";
import Cataloges from "./Models/Cataloges.js";
import Catalogoes from "./Models/CatalogMolder.js";
import Country from "./Models/CountryModel.js";
import Countries from "./data/Address/Country.js";
import Provinces from "./Models/ProvinceModel.js";
import Province from "./data/Address/Province.js";
import Branch from "./Models/BranchModel.js";
import Branches from "./data/Address/Branch.js";
import Order from './data/order/Order.js';
import Orders from "./Models/OrderModel.js";
import OrderDetail from "./data/Order/OrderDetail.js";
import OrderDetails from "./Models/OrderDetailModel.js";
import OrderTable from "./Models/OrderTable.js";
import OrderTableData from "./data/orderTable.js";
import staff from "./Models/StaffModle.js";
import NhanVien from "./data/staff.js";
import OrderBranch from "./Models/OrderBranch.js";
import orderBranch from "./data/branchOrder/OrderBranch.js";
import OrderBranchDetail from "./Models/OrderBranchDetailModel.js";
import orderBranchDetail from "./data/branchOrder/OrderBanchDetail.js";
const ImportData = express.Router();

// IMPORT DATA STORIES
ImportData.post('/pages/story', async( req, res) => {
  // await Products.remove({})
  const importStory = await Stories.insertMany(Story)
  res.send({importStory})
})
// IMPORT DATA USER
ImportData.post('/user', async( req, res) => {
  // await Products.remove({})
  const importUser = await User.insertMany(users)
  res.send({importUser})
})
// IMPORT DATA PRODUCT
ImportData.post('/collections/', async( req, res) => {
  // await Products.remove({})
  const importProducts = await Products.insertMany(Product)
  res.send({importProducts})
})
// IMPORT DATA CATALOG
ImportData.post('/catalog', async( req, res) => {
  // await Products.remove({})
  const importCatalog = await Catalog.insertMany(Catalogs)
  res.send({importCatalog})
})
// IMPORT DATA CATALOG DEMO
ImportData.post('/catalogs', async( req, res) => {
  // await Products.remove({})
  const importCatalogs = await Catalogoes.insertMany(Cataloges)
  res.send({importCatalogs})
})
// IMPORT DATA ORDER BRNACH
ImportData.post('/orderbranch', async( req, res) => {
  // await Products.remove({})
  const importOrderBranch = await OrderBranch.insertMany(orderBranch)
  res.send({importOrderBranch})
})

// // IMPORT DATA SHOP
// ImportData.post('/pages/shop', async( req, res) => {
//   // await Products.remove({})
//   const importState = await States.insertMany(State)
//   res.send({importState})
// })
// IMPORT DATA COUNTRY
ImportData.post('/country', async( req, res) => {
  // await Products.remove({})
  const importCountry = await Country.insertMany(Countries)
  res.send({importCountry})
})
// IMPORT DATA PROVINCE
ImportData.post('/province', async( req, res) => {
  // await Products.remove({})
  const importProvince = await Provinces.insertMany(Province)
  res.send({importProvince})
})
// IMPORT DATA BRANCH
ImportData.post('/branch', async( req, res) => {
  // await Products.remove({})
  const importBranch = await Branch.insertMany(Branches)
  res.send({importBranch})
})
// IMPORT DATA ORDER
ImportData.post('/order', async( req, res) => {
  // await Products.remove({})
  const importOrder = await Orders.insertMany(Order)
  res.send({importOrder})
})
// IMPORT DATA ORDER DETAIL
ImportData.post('/orderdetail', async( req, res) => {
  // await Products.remove({})
  const importOrderDetail = await OrderDetails.insertMany(OrderDetail)
  res.send({importOrderDetail})
})
// IMPORT DATA ORDER TABLE
ImportData.post('/ordertable', async( req, res) => {
  // await Products.remove({})
  const importOrderTable = await OrderTable.insertMany(OrderTableData)
  res.send({importOrderTable})
})
// IMPORT DATA STAFF
ImportData.post('/staff', async( req, res) => {
  // await Products.remove({})
  const importStaff = await staff.insertMany(NhanVien)
  res.send({importStaff})
})
// IMPORT DATA ORDER BRANCH DETAIL
ImportData.post('/orderBranchDetail', async( req, res) => {
  // await Products.remove({})
  const importOrderBranchDetail = await OrderBranchDetail.insertMany(orderBranchDetail)
  res.send({importOrderBranchDetail})
})
export default ImportData;  