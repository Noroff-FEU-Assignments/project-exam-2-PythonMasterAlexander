import { UserPostData } from "../types";
export default async function updatePost(
  url: string,
  token: string,
  postData: UserPostData,
  putMethod: string,
) {
  const response = await fetch(url, {
    method: `${putMethod}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(postData),
  });
  console.log(response);
  return await response.json();
}
