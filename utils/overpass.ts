// utils/overpass.ts
import axios from 'axios';

export async function queryOverpass(query: string) {
  try {
    const response = await axios.get('https://overpass-api.de/api/interpreter', {
      params: {
        data: query,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error querying Overpass API:', error);
    throw new Error('Failed to query Overpass API');
  }
}