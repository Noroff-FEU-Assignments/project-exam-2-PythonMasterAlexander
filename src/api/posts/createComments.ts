import { CommentData } from "../types";
export default async function viewPost(
  url: string,
  token: string,
  postMethod: string,
  postData: CommentData,
) {
  const response = await fetch(url, {
    method: `${postMethod}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(postData),
  });
  return await response.json();
}
