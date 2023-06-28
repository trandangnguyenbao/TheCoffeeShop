import { toast } from "react-toastify";

const Reducer = (cart = [], action) => {
    if (action.type === "ADD"){
        let tempcart = cart.find((product) => product.title === action.payload.title)
        if (!tempcart){
            toast.success("Thêm sản phẩm thành công");
           return [...cart, action.payload]
        }
        else {
          const tempcarts = cart.map((product) => {
            if (product.title === action.payload.title){
              return {...product, quantity: Number(product.quantity) + Number(action.payload.quantity)}
            }
            return product
          })
          toast.success("Thêm sản phẩm thành công!")
          return tempcarts
        }
    }
    if (action.type === "REMOVE") {
        return cart.filter((product) => product.title !== action.payload.title)
    }
    if (action.type === "INCREASE") {
        let tempcart = cart.map((product) => {
          if (product.title === action.payload.title) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        });
        return tempcart;
      }
    if (action.type === "DECREASE") {
        let tempcart = cart.map((product) => {
          if (product.title === action.payload.title) {
            return { ...product, quantity: product.quantity - 1 };
          }
          return product;
        });
        return tempcart;
      }
    return cart
}

export default Reducer