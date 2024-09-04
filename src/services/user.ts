export async function fetchUser(userName: string, page: number = 1) {
  const apiKey = import.meta.env.VITE_PUBLIC_API_KEY;
  const url = `/api/rest/1.0/user/${userName}/attended?p=${page}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "x-api-key": apiKey,
        Accept: "application/json",
        "Accept-Language": "en",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
}
