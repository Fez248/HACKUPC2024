const API_BASE_URL = 'https://api.mapbox.com/directions/v5';


interface RouteParams {
    coordinates: [number, number][];
    type?: 'driving' | 'walking' | 'cycling'; 
  }

// Function to fetch route data
export const fetchRouteData = async (params: RouteParams): Promise<any> => {

    const coordinatesString = params.coordinates.map(coord => `${coord[0]},${coord[1]}`).join(';');
    const profile = params.type || 'driving';
    const url = new URL(`${API_BASE_URL}/mapbox/${profile}/${coordinatesString}`);
    url.searchParams.append('access_token', process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!);
    url.searchParams.append('geometries', 'geojson');

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch route data:", error);
    throw error;
  }
};