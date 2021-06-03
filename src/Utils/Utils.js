
export function calculateCartTotal(cart){
    return cart.reduce((accumulator, cartItem) => accumulator + cartItem.price,0);
}
