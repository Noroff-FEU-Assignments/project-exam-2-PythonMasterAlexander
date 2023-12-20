import * as yup from "yup";
export const userSchema = yup.object({
  name: yup.string().min(3, "minimum 3 characters").required(),
  email: yup.string().email("not a valid email address").required(),
  password: yup.string().min(8, "minimum 8 characters").required(),
});
