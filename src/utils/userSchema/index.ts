import * as yup from "yup";
export const userSchema = yup.object({
  name: yup
    .string()
    .min(3, "Your full name must be at least 3 characters.")
    .required(),
  email: yup.string().email("Must be a valid email address.").required(),
  password: yup.string().min(8, "Must be at least 8 characters").required(),
});
