import { UpdateUserPost } from "../types";
export default async function updatePost(
  url: string,
  token: string,
  data: UpdateUserPost | null,
  putMethod: string,
) {
  const response = await fetch(url, {
    method: `${putMethod}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
}
