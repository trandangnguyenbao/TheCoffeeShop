import Catalog from './data/Catalog.js';
import StaffRoute from "./Routes/StaffRouter.js";
import branchRoute from "./Routes/BranchRouter.js";
import catalogRoute from "./Routes/CatalogRouter.js";
import catalogesRoute from "./Routes/CatalogesRouter.js";
import connectDatabase from "./config/MongoDb.js";
import countryRoute from "./Routes/CountryRouter.js";
import dotenv from 'dotenv';
import express from "express";
import orderBranchDetailRoute from "./Routes/OrderBranchDetailRouter.js";
import orderBranchRoute from "./Routes/OrderBranchRouter.js";
import orderDetailRoute from "./Routes/OrderDetailRouter.js";
import orderRoute from "./Routes/RouterOrder.js";
import orderTableRoute from "./Routes/OrderTableRouter.js";
import productDetailRoute from "./Routes/ProductDetailRouter.js";
import productRoute from "./Routes/ProductRoutes.js";
import provinceRoute from "./Routes/ProvinceRouter.js";
import stateRoute from './Routes/StateRouter.js'
import storyRoute from "./Routes/StoryRouter.js";
import userRoute from './Routes/userRouter.js'

// import ImportData from "./DataImport.js";




















// import Products from "./data/ProductForCatalog.js";










// import catalogesRoute from './Routes/catalogesRouter.js'










// import productDetailRoute from "./Routes/ProductDetailRouter.js";
// import catalogRoute from "./Routes/CatalogRouter.js";

dotenv.config();
connectDatabase()
const app = express();
app.use(express.json())

// API 
// app.use('/api/import', ImportData);
// // Product By Catalog Path
app.use('/api/collections', productRoute)
// Get Product By CATALOG
app.use('/api/catalog', catalogRoute)
// Get Product By CATALOG DEMO
app.use('/api/cataloges', catalogesRoute)
// GET PRODUCT FROM PATH NAME
app.use('/api/product', productDetailRoute)
// GET STATE
app.use('/api/pages/shop', stateRoute)
// GET STORY
app.use('/api/pages/story', storyRoute)
// GET USER
app.use('/api/user', userRoute )
// GET BRANCH
app.use('/api/branch', branchRoute )
// GET COUNTRY
app.use('/api/country', countryRoute )
// GET PROVINCE
app.use('/api/province', provinceRoute )
// GET ORDER
app.use('/api/order', orderRoute )
// GET ORDER DETAIL
app.use('/api/orderdetail', orderDetailRoute )
// GET ORDER Table
app.use('/api/orderTable', orderTableRoute )
// GET Staff
app.use('/api/staff', StaffRoute )
// GET OrderBranch
app.use('/api/orderBranch', orderBranchRoute )
// GET OrderDetailBranch
app.use('/api/orderBranchDetail', orderBranchDetailRoute)

app.get('/', (req, res) => {
    res.send('API is Running...');
})

// app.get('/', (res,req) => {
//     res.send('/api/product/', pro)
// })

const PORT = process.env.PORT || 10000;

app.listen(PORT, console.log(`Server Running in Port ${PORT}`));