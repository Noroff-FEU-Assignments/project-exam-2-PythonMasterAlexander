import { UserPostData } from "../types";
export default async function createUserPost(
  url: string,
  token: string,
  postData: UserPostData,
  postMethod: string,
) {
  const response = await fetch(url, {
    method: `${postMethod}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(postData),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
}
