/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {numer} Total price
 */
export const totalAmount = (prducts) => {
  let total = 0;
  prducts?.forEach((product) => {
    total += product.totalPrice;
  });
  return total.toFixed(2);
};
