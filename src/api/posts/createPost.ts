import { PostData } from "../types";
export default async function createUserPost(
  url: string,
  token: string,
  postData: PostData,
) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(postData),
  });
  const post = await response.json();
  console.log(post);
}
