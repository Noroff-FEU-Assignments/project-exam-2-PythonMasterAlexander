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
export interface UserPost {
  id: number;
  title: string;
  body: string;
  tags: [string];
  media: string;
  created: string;
  updated: string;
  _count: {
    comments: number;
    reactions: number;
  };
}
export interface CommentData {
  body: string;
}
export interface UserCommentOnPost {
  body: string;
  replyToId: null;
  id: number;
  postId: number;
  owner: string;
  created: string;
  author: {
    name: string;
    email: string;
    avatar: string;
    banner: string;
  };
}
export interface UpdateUserPost {
  title: string;
  body: string;
  tags: [string];
  media: string;
}
