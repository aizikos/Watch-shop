const initialState = {
    product: JSON.parse(localStorage.getItem('product')) || [],
    basket: JSON.parse(localStorage.getItem("basket")) || [],
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PRODUCT':
            let result = [...state.product, action.payload]
            localStorage.setItem('product', JSON.stringify(result))
            return { ...state, product: result };
        case "DELETE":
            let del = state.product.filter((el) => el.id !== action.payload.id)
            localStorage.setItem("product", JSON.stringify(del))
            return { ...state, product: del }
        case 'BASKET_PRODUCT':
            let find_basket = state.basket.find((el) => el.id === action.payload.id)
            let basket_res = state.basket.map((el) => el.id === action.payload.id ?{...el, quently: el.quently + 1}: el)
            localStorage.setItem('basket', JSON.stringify(basket_res))
            if (find_basket) {
                return { ...state, basket: basket_res }
            } else {
                return { ...state, basket: [...state.basket, action.payload] }
            }
        case "INCREMENT_QUANTITY":
            return { ...state, basket: state.basket.map((el) => el.id === action.payload.id ? { ...el, quently: el.quently + 1 } : el) }
        case "MINUS_QUANTITY":
            return {
                ...state, basket: state.basket.map((el) => el.id === action.payload.id ?
                    { ...el, quently: el.quently > 1 ? el.quently - 1 : 1 } : el)
            }
        case "DELETE_BASKET":
            let del_basket = state.basket.filter((el) => el.id !== action.payload.id)
            localStorage.setItem("basket",JSON.stringify(del_basket))
            return { ...state, basket:  del_basket}
        default:
            return state
    }
}