"use client";

import React, { useEffect, useRef } from "react";
import maplibregl, {
  Map as MapType,
  MapGeoJSONFeature,
  MapMouseEvent,
  Popup,
  StyleSpecification,
} from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import styles from "./Map.module.css";
import { mapStyle } from "./mapStyle";

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<MapType>();

  useEffect(() => {
    if (map.current || !mapContainer.current) {
      return;
    }

    // Initialize map with min and max zoom
    map.current = new maplibregl.Map({
      attributionControl: false,
      container: mapContainer.current,
      bounds: [-12.217007, 35.294016, 9.008579, 51.49093],
      style: mapStyle as StyleSpecification,
      dragPan: false,
      dragRotate: false,
      interactive: false,
    });

    map.current.on("load", () => {
      if (!map.current) {
        return;
      }

      const element = document.createElement("a");
      element.className = "marker";
      element.href = "https://google.fr";
      const hover = document.createElement("div");
      hover.className = "marker-popup";
      hover.textContent = "Paris";

      element.appendChild(hover);

      const marker = new maplibregl.Marker({ element: element })
        .setLngLat([2.3522219, 48.856614])
        .addTo(map.current);
    });
  }, []);

  return (
    <div className={styles.mapContainer}>
      <div
        ref={mapContainer}
        className={styles.map}
        data-testid="detailed-map"
      ></div>
    </div>
  );
};

export default Map;
