const API_BASE_URL = 'https://api.mapbox.com/directions/v5';


interface RouteParams {
    start: { lat: number; lng: number };
    end: { lat: number; lng: number };
    type?: 'driving' | 'walking' | 'cycling'; // Specify the possible types if known
  }

// Function to fetch route data
export const fetchRouteData = async (start: [number, number], end: [number, number]): Promise<any> => {
  try {
    const url = new URL(`${API_BASE_URL}/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}`);
    url.searchParams.append('access_token', 'pk.eyJ1Ijoid2FuZGVyd2F5IiwiYSI6ImNsdnJka29tNDBwNmkycnJyZ2l2OG1lNm4ifQ.9vwmKwk8iDwP0L85zOW-cw');
    url.searchParams.append('geometries', 'geojson');
    const response = await fetch(`${url}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log("response", response);
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch route data:", error);
    throw error;
  }
};