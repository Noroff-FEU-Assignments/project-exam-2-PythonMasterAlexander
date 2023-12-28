import { UserPostData } from "../types";
export default async function createUserPost(
  url: string,
  token: string,
  postData: UserPostData,
) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(postData),
  });
  console.log(response);
  return await response.json();
}
