export const initialState = {
    basket: []
};

function reducer(state, action) {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            
            return { ...state, 
                basket: [...state.basket, action.item],
            };
            
        case 'REMOVE_FROM_BASKET':
            //cloned the basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                //item exists in basket, remove it
              newBasket.splice(index, 1);  
            } else {
               console.log(
                   `cant remove product (id: ${action.id}) as its not in basket`
               ); 
            }
            return { 
                ...state, 
                basket: newBasket, 
            };
        default:
            return state;    
    }
}

export default reducer;