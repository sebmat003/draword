import { IUser } from "./models/user.interfaces.js";
import User from "./models/user.model.js";

export const createUser = async (user: IUser): Promise<IUser> => {
  return User.create(user);
};
