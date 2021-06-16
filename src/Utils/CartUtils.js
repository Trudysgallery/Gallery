export const addItemToCart = (itemToAdd,oldCart) => isItemInCart(itemToAdd,oldCart) ?
    IncrementItemInCart(itemToAdd,oldCart) :
    [...oldCart,{productInfo:itemToAdd,quantity:1}];

export const calculateCartSize = (cart) => cart.reduce((accumulator, cartItem) => accumulator + cartItem.quantity,0);

export const calculateCartTotalCost = (cart) => cart.reduce((accumulator, cartItem) => accumulator + (cartItem.productInfo.price*cartItem.quantity),0);

export const DecrementItemInCart = (itemToDecrement,oldCart) => oldCart.map((item) => item.productInfo.id===itemToDecrement.id ? {...item, quantity:--item.quantity} : item );  

export const IncrementItemInCart = (itemToIncrement,oldCart) => oldCart.map((item) => item.productInfo.id===itemToIncrement.id ? {...item, quantity:++item.quantity} : item );  

const isItemInCart = (item,cart) => cart.some(e => e.productInfo.id===item.id);

export const removeItemfromCart = (itemToRemove,oldCart) => oldCart.filter((item) => item.productInfo.id!==itemToRemove.id);

export const  convertCartToEmail = (cart) => cart.reduce((accumulator,cartItem) => accumulator + cartItem.quantity + " " + cartItem.productInfo.title + ";","");