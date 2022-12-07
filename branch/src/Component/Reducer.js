const Reducer = (cart = [], action) => {
    if (action.type === "ADD"){
        let tempcart = cart.filter((product) => product.title === action.payload.title)
        if (tempcart<1){
            return [...cart, action.payload]
        }
        else{
            return cart;
        }
    }
    if (action.type === "REMOVE") {
        return cart.filter((product) => product.path_name !== action.payload.path_name)
    }
    if (action.type === "INCREASE"){
        let rempcart= cart.map((product) => {
            if (product._id === action.payload._id){
                return {...product, quantity: Number(product.quantity + 1)};
            } return product
        })
        return rempcart
    }
    if (action.type === "DECREASE") {
        let tempcart = cart.map((product) => {
          if (product.path_name === action.payload.path_name) {
            return { ...product, quantity: product.quantity - 1 };
          }
          return product;
        });
        return tempcart;
      }
    return cart
}

export default Reducer