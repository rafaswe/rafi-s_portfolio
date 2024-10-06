import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

interface Location {
  position: [number, number];
  title: string;
  type?: "modern" | "classic" | "minimal" | "detailed";
}

interface MapProps {
  height?: string;
  width?: string;
  center?: [number, number];
  zoom?: number;
  locations?: Location[];
}

const DarkMap: React.FC<MapProps> = ({
  height = "250px",
  width = "100%",
  center = [23.686867228404914, 90.46678312497929],
  zoom = 14,
  locations = [
    {
      position: [23.686867228404914, 90.46678312497929],
      title: "Rafi's Palace",
      type: "modern",
    },
  ],
}) => {
  useEffect(() => {
    // Create custom icon
    const createCustomIcon = (type: string = "modern") => {
      return L.divIcon({
        className: `custom-marker ${type}`,
        html: `
          <div class="marker-content">
            ${getHomeIcon(type)}
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      });
    };

    // Initialize map
    const map = L.map("map", {
      center: center,
      zoom: zoom,
      zoomControl: true,
    });

    // Add dark theme tile layer
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }
    ).addTo(map);

    // Add markers for all locations
    locations.forEach((location) => {
      const marker = L.marker(location.position, {
        icon: createCustomIcon(location.type),
      }).addTo(map);

      marker.bindPopup(`
        <div class="custom-popup">
          <h3>${location.title}</h3>
        </div>
      `);
    });

    return () => {
      map.remove();
    };
  }, [center, zoom, locations]);

  return (
    <div
      id="map"
      style={{
        height,
        width,
        borderRadius: "0.75rem",
      }}
      className="z-0"
    />
  );
};

// Different home icon styles
const getHomeIcon = (type: string = "modern") => {
  switch (type) {
    case "modern":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L4 9V21H20V9L12 3M12 5.7L18 10.2V19H6V10.2L12 5.7M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"/>
      </svg>`;
    case "classic":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19,20H17V11H7V20H5V9L12,3L19,9V20M8,12H16V14H8V12M8,15H16V17H8V15M16,20H8V18H16V20Z"/>
      </svg>`;
    case "minimal":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"/>
      </svg>`;
    case "detailed":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,3L20,9V21H4V9L12,3M7,19H9V12H11V19H13V12H15V19H17V11L12,7.21L7,11V19Z"/>
      </svg>`;
    default:
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,3L20,9V21H4V9L12,3M12,5.5L6.5,9.5V19H17.5V9.5L12,5.5Z"/>
      </svg>`;
  }
};

export default DarkMap;
