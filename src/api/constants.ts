const API_HOST_URL: string = "https://api.noroff.dev";
const API_BASE: string = "/api/v1";
const API_SOCIAL_BASE: string = "/social";
const API_SOCIAL_BASE_REGISTER: string = "/auth/register";
const API_SOCIAL_BASE_LOGIN: string = "/auth/login";
export const userToken: string = "token";
export const put: string = "PUT";
export const post: string = "POST";

export const API_REGISTER = `${API_HOST_URL}${API_BASE}${API_SOCIAL_BASE}${API_SOCIAL_BASE_REGISTER}`;
export const API_LOGIN = `${API_HOST_URL}${API_BASE}${API_SOCIAL_BASE}${API_SOCIAL_BASE_LOGIN}`;
export const API_SOCIAL_CREATE_POST_WITH_ = `${API_HOST_URL}${API_BASE}${API_SOCIAL_BASE}`;
