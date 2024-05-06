"use client"

import MapboxInteractive from "./mapboxInteractive";

const MapInteractive = () => {
 return (
    <div>
      <MapboxInteractive onChange={(data) => {
        // send to backend
      }}/>
    </div>
 )
}


export default MapInteractive;