

export async function getAllStarships() {
    try {
        const response = await fetch("https://swapi.dev/api/starships/");
        if (!response.ok) throw new Error("Failed to fetch starships");
        const data = await response.json();
        return data.results; //extracts the array of starships
    } catch (error) {
        console.error("Error fetching starships:", error);
        return [];  //return an empty array in case of an error
    }
}