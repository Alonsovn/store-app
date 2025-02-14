/**
 * This function calculates total price of a new order
 * @param {Array} items cartProducts: Array of Objects
 * @returns {number} total price
 */

export const totalPrice = (items) => {
  let sum = 0;
  items.forEach((item) => (sum += item.price));

  return sum;
};
