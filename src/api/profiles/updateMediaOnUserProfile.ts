import { MediaEntry } from "../../api/types";
export default async function updateMediaOnUserProfile(
  url: string,
  token: string,
  putMethod: string,
  data: MediaEntry | null,
) {
  try {
    const response = await fetch(url, {
      method: `${putMethod}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error("Something went wrong");
  }
}
