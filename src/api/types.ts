export interface RegisterApiFormData {
  name: string;
  email: string;
  password: string;
}
export interface ApiErrorMessage {
  field: string;
  message: string;
}
export interface LoginApiFormData {
  email: string;
  password: string;
}
export interface PostData {
  title: string;
  body: string;
}
