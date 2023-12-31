export default async function removePost(
  url: string,
  token: string,
  deleteMethod: string,
): Promise<Response> {
  try {
    const response = await fetch(url, {
      method: `${deleteMethod}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Something went wrong");
  }
}
