export async function fetchUser(userName: string, page: number = 1) {
  const url = `/api/user?userName=${userName}&p=${page}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching setlist:", error);
    throw error;
  }
}
