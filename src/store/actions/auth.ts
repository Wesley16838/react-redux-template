import * as types from "../actionTypes";
import { User } from "../../interfaces/user.interface"

export const register = (userData:User) => ({
  type: types.REGISTER_USER,
  payload: userData,
});