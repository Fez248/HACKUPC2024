"use client"

import { FC, useEffect, useRef } from "react";
import { useState } from "react";
import mapboxgl from "mapbox-gl";
import { FeatureCollection, LineString } from "geojson";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";

const MapboxInteractive: FC<{
  onChange: (data: { 
    origin: string; 
    destination: string 
  }) => void;
}> = ({ onChange }) => {
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

    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/wanderway/clvrfh4a500ct01pf1h4u6yny",
      center: [2.1734, 41.3851], // Center of the US for demo purposes
      zoom: 4,
    });

    const directions = new MapboxDirections({
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
      unit: "metric",
      profile: "mapbox/cycling",
      controls: { inputs: false, instructions: false, profileSwitcher: false },
    });

    map.addControl(directions);

    directions.on("route", () => {
      onChange({
        origin: directions.getOrigin(),
        destination: directions.getDestination(),
      });
    });

    return () => map.remove(); // Clean up the map instance
  }, [onChange]);

  return (
    <div style={{ width: "100%", height: "800px" }} ref={mapContainerRef} />
  );
};

export default MapboxInteractive;
