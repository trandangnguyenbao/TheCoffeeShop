// import axios from "axios"
// import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constant/ProductConstants"


// export const listProduct = () => async (dispatch) => {
//     try {
//         dispatch({type: PRODUCT_LIST_REQUEST})
        
//         const {data} = await axios.get("/api/collections/");
//         dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
//     } catch (error) {
//         dispatch({
//             type: PRODUCT_LIST_FAIL, 
//             payload: 
//             error.response && error.response.data.message ? error.response.data.message
//             : error.message,

//         })
//     }
// }