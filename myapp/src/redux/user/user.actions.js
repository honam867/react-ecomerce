import { UserActionsType } from "./user.types";

const setCurrentUser = (user) => ({
  type: UserActionsType.SET_CURRENT_USER,
  payload: user,
});

export default setCurrentUser;
