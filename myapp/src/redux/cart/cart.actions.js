const { CartActionsType } = require("./cart.types");
const toogleCartHidden = () => ({
  type: CartActionsType.TOGGLE_CART_HIDDEN,
});

export default toogleCartHidden;
