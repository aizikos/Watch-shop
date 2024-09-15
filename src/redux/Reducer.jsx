const initialState = {
    product: JSON.parse(localStorage.getItem('product')) || [],
    basket: [],
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PRODUCT':
            let result = [...state.product, action.payload]
            localStorage.setItem('product', JSON.stringify(result))
            return { ...state, product: result };
        case "DELETE" :
            return {... state, product: state.product.filter((el) => el.id !== action.payload.id)}   
        default:
            return state
    }
}