import * as yup from "yup";
export const userRegisterSchema = yup.object({
  name: yup.string().min(3, "minimum 3 characters").required(),
  email: yup.string().email("not a valid email address").required(),
  password: yup.string().min(8, "minimum 8 characters").required(),
});
export const userLoginSchema = yup.object({
  email: yup.string().email("not a valid email address").required(),
  password: yup.string().min(8, "minimum 8 characters").required(),
});
export const userPostSchema = yup.object({
  title: yup.string().required(),
  body: yup.string(),
  media: yup.string().url(),
});
export const updateAvatarAndBannerSchema = yup.object({
  banner: yup.string().url("not a valid url").required(),
  avatar: yup.string().url("not a valid url").required(),
});
