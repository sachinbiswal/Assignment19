export let productReducer = (state, action) => {

    switch (action.type) {
        case "products":
            state = {
                ...state,
                products: action.payload
            };
            break;
        case "cart":
            state = {
                ...state,

                cart: [...state.cart, action.payload]
            };
            break;
        case "remove":
            state = {
                ...state,
                cart: state.cart.filter((ele) => ele.id !== action.payload)
            };
            break;
    }
    console.log(state)
    return state;
}

export default productReducer;