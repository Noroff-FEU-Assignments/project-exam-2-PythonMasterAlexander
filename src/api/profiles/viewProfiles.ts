interface UserProfile {
  _count: {
    posts: number;
    followers: number;
    following: number;
  };
  avatar: string;
  banner: string;
  email: string;
  name: string;
}
export default async function viewPosts(
  url: string,
  token: string,
): Promise<[UserProfile]> {
  try {
    const response = await fetch(url, {
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
