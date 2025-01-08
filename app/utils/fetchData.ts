"use server";

export async function fetchData(path: string, query = "language=en-US") {
  try {
    const requestOptions = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PRIVATE_API_READ_ACCESS_TOKEN}`,
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3${path}?${query}`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
