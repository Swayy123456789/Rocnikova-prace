import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const center = [50.0884 ,14.4202]; //Souřadnice

const MiniMap = () => {
  return (

    <div className="!shadow-lg !rounded-lg !overflow-hidden border-gray-300">

        <MapContainer center={center} zoom={17} style={{ width: "380px", height: "250px" }}>
        {/* Použití OpenStreetMap */}

            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />


        {/* Marker na daném místě */}
                <Marker position={center}>

            <Popup>Jsem tady!</Popup>

            </Marker>

        </MapContainer>
    </div>
  );
};

export default MiniMap;