export const initialState = {
    basket: [
        {
            id:6457,
            title:"Learning React Native: Building Native Mobile Apps...",
            price:151,
            rating:5,
            image:"https://http2.mlstatic.com/D_NQ_NP_835599-MLA26239270219_102017-O.webp"
        },
        {
            id:6457,
            title:"Learning React Native: Building Native Mobile Apps...",
            price:151,
            rating:5,
            image:"https://http2.mlstatic.com/D_NQ_NP_835599-MLA26239270219_102017-O.webp"
        }
    ],
    user: null,
};

function reducer(state, action) {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //logic to add item to the basket
            return { ...state, 
                basket: [...state.basket, action.item],
            };
            
        case 'REMOVE_FROM_BASKET':
            //logic for removing item from basket

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