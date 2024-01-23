import { UserProfiles } from "../types";
export default async function followOrUnfollowProfiles(
  url: string,
  token: string,
  putMethod: string,
): Promise<UserProfiles> {
  try {
    const response = await fetch(url, {
      method: `${putMethod}`,
      headers: {
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
