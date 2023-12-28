export default async function removePost(
  url: string,
  token: string,
  deleteMethode: string,
) {
  const response = await fetch(url, {
    method: `${deleteMethode}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    //body: JSON.stringify(),
  });
  console.log(response);
  return await response.json();
}
