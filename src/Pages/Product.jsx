import ProDesc from "../Components/Prodesc";
import ProImage from "../Components/Proimage";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";



function Product() {
  return (
    <>
      <div className="relative overflow-visible">
        <img src="/orange.png" alt="" className="absolute top-[1100px] left-0 -z-10" />
        <img src="/green.png" alt="" className="absolute top-[80px] right-0 -z-10" />

        <ProImage />
        <ProDesc />

        <div className="pt-20 pl-28">
          <p className="text-[#1DAEFF] text-[20px] font-[600] mb-[30px]">
            Property on Map
          </p>

          <MapContainer
            center={[48.8566, 2.3522]}
            zoom={13}
            style={{ width: "858px", height: "355px", borderRadius: "20px",overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'/>
            <Marker position={[48.8566, 2.3522]}>
              <Popup> Paris, France — Location of the property</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
}

export default Product;
