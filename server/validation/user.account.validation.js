import { UserAccount } from "../models/user.account.model.js";
import { isValidEmail } from "./utility/string_validator.js";

export const newAccountValidation = async (name, email, password) => {
    if (!name) return 'empty name';
    if (!email) return 'empty email';
    if (!password) return 'empty password';
    if (isValidEmail(email) === false) return 'is not an email';
    if (await UserAccount.findOne({email: email})) return 'email is taken!';
    return true;
}