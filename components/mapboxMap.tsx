"use client";

import { FC, useEffect, useRef } from "react";
import { useState } from "react";
import mapboxgl from "mapbox-gl";
import { FeatureCollection, LineString } from "geojson";

const MapboxMap: FC<{
  info: FeatureCollection<LineString>;
}> = ({ info }) => {
  const [routeStart, setRouteStart] = useState<[number, number]>([0, 0]);
  const [routeEnd, setRouteEnd] = useState<[number, number]>([0, 0]);

  const mapContainerRef = useRef<HTMLDivElement>(null);

  const calculateCenter = (coordinates: number[][]) => {
    const length = coordinates.length;
    const total = coordinates.reduce(
      (acc, [lng, lat]) => {
        acc.lng += lng;
        acc.lat += lat;
        return acc;
      },
      { lng: 0, lat: 0 }
    );

    return [total.lng / length, total.lat / length] as [number, number];
  };

  useEffect(() => {
    console.log("env: ", process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN);
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;
    const centerCoordinates = calculateCenter(
      info.features[0].geometry.coordinates
    );

    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/wanderway/clvrfh4a500ct01pf1h4u6yny",
      center: centerCoordinates, // Center of the US for demo purposes
      zoom: 4,
    });

    const marker = new mapboxgl.Marker();
    marker
      .setLngLat([
        info.features[0].geometry.coordinates[0][0],
        info.features[0].geometry.coordinates[0][1],
      ])
      .addTo(map);

    map.on("load", () => {
      // Add route as a source
      map.addSource("route", {
        type: "geojson",
        data: info,
      });

      // Add route as a layer
      map.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#0000FF",
          "line-width": 6,
        },
      });
    });

    return () => map.remove(); // Clean up the map instance
  });

  return (
    <div style={{ width: "100%", height: "800px" }} ref={mapContainerRef} />
  );
};

export default MapboxMap;
