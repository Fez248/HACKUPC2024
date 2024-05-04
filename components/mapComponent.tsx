"use client"

import { useState } from 'react';
import { queryOverpass } from '../utils/overpass';
import { fetchRouteData } from '../utils/distances';
import MapboxMap from '../components/mapboxMap';

const MapComponent = () => {
    const [queryResult, setQueryResult] = useState('');
  
    const makeOverpassQuery = async () => {
      
      try {
        
        // Example query: fetch all cafes within 1km of a specific location
        const query = `
          [out:json];
          area[name="Barcelona"]->.searchArea;
          (
            node["tourism"="hotel"](area.searchArea);
            way["tourism"="hotel"](area.searchArea);
            relation["tourism"="hotel"](area.searchArea);
          );
          out;
        `;
        
        //const result = await queryOverpass(query);
        // Assuming the JSON is publicly accessible under the 'public' directory
        const response = await fetch('data/routedata.json')
        const data = await response.json()
        const coords = data.routes[0].cities
        console.log(coords)

        //const result = await fetchRouteData({coordinates: coords, type: 'driving'});
        //console.log(result)
        
        //setQueryResult(JSON.stringify(result, null, 2));
      } catch (error) {
        console.error('Error querying Route API:', error);
      }
    };
  
    return (
      <div>
        <button onClick={makeOverpassQuery}>Make Overpass Query</button>
        <div>
        <MapboxMap />
        </div>
        <pre>{queryResult}</pre>
      </div>
    );
  };
  
  export default MapComponent;