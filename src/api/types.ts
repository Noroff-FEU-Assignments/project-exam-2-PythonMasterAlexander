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
export interface UserPostData {
  title: string;
  body?: string;
  media?: string;
}
export interface UserProfiles {
  _count: {
    posts: number;
    followers: number;
    following: number;
  };
  avatar: string;
  banner: string;
  email: string;
  name: string;
}
export interface UserProfile {
  name: string;
  email: string;
  banner: string | null;
  avatar: string | null;
}
export interface MediaEntry {
  banner: string;
  avatar: string;
}
