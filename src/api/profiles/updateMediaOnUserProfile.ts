export default async function updateMediaOnUserProfile(
  url: string,
  token: string,
  putMethod: string,
) {
  //Need to change this body to the value the user sends in the input fields
  const testBody = {
    banner:
      "https://fastly.picsum.photos/id/294/200/200.jpg?hmac=tSuqBbGGNYqgxQ-6KO7-wxq8B4m3GbZqQAbr7tNApz8",
    avatar:
      "https://fastly.picsum.photos/id/783/200/200.jpg?hmac=xd2H7xsUnYmNs2Tf6ne9m1bWpTcIsiiQ93D1SCdOvIY",
  };
  try {
    const response = await fetch(url, {
      method: `${putMethod}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(testBody),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error("Something went wrong");
  }
}
