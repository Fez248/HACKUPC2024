// src/utils/geoJsonUtils.ts
import { ApiResponse, Route } from '../types/index';
import { FeatureCollection, Feature, LineString } from 'geojson';

export const convertToGeoJSON = (apiData: ApiResponse): FeatureCollection<LineString> => {
  const features: Feature<LineString>[] = apiData.routes.map((route: Route) => ({
    type: 'Feature',
    properties: {
      weight_name: route.weight_name,
      weight: route.weight,
      duration: route.duration,
      distance: route.distance,
      summary: route.legs.map(leg => leg.summary).join(', ')
    },
    geometry: route.geometry
  }));

  return {
    type: 'FeatureCollection',
    features: features
  };
};