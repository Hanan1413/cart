import{act} from "react-dom/test-utils";
import cartItems from "./data";

const reducer = (state, action) =>{
   
    if(action.type === 'CLEAR_CART'){
        // spread all state vlaue and empty cart arry
        return{...state, cart:[]}
    }

    if (action.type === 'REMOVE') {
                // if cart item id does not match id I'm passing in payload then return it  
                       // if it match the id then remove it 

        return{...state,
            cart:state.cart.filter((cartItem) => cartItem.id !== action.payload),
        }
        
    }

    if(action.type === 'INCREASE'){
        let tempCart = state.cart.map((cartItem) => {
            // if cartItem id match id im passing increase the amount
            if(cartItem.id === action.payload) {
                return{...cartItem, amount: cartItem.amount + 1}
            }

         // if cartItem id dos not match id im passing in return cartItem

            return cartItem
        })
        // return state and cart = tempCart
        return {...state, cart: tempCart}
         }


         if(action.type === 'DECREASE'){
            let tempCart = state.cart.map((cartItem) => {
                // if cartItem id match id im passing increase the amount
                if(cartItem.id === action.payload) {
                    return{...cartItem, amount: cartItem.amount - 1}
                }
    
             // if cartItem id dos not match id im passing in return cartItem
    
                return cartItem
                // if cartItem amount  is not = 0 then return to temp cart 
                // if it is 0 remove it from the cart 
            })
            .filter((cartItem) => cartItem.amount !== 0 )
            // return state and cart = tempCart

            return{...state, cart: tempCart}
             
            }
            if (action.type === 'GET_TOTALS') {

              let {total, amount } = state.cart.reduce(
                (cartTotal, cartItem) =>{
                    const{price, amount} = cartItem

                    const itemTotal = price * amount;
                     
                    cartTotal.total += itemTotal
                     cartTotal.amount += amount

                    console.log(price, amount)
                    return cartTotal
                },
                {
                    total:0,
                    amount:0,
                }
              )
            //   to get 2 fixed number
              total = parseFloat(total.toFixed(2))



                return{...state, total, amount}

                
            }


            return state


}

export default reducer;