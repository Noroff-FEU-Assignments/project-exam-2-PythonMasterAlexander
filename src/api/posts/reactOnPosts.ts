export default async function reactOnPosts(
  url: string,
  token: string,
  putMethod: string,
) {
  const response = await fetch(url, {
    method: `${putMethod}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
}
