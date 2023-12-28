import { UserPostData } from "../types";
export default async function updatePost(
  url: string,
  token: string,
  postData: UserPostData,
  putMethode: string,
) {
  const response = await fetch(url, {
    method: `${putMethode}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(postData),
  });
  console.log(response);
  return await response.json();
}
