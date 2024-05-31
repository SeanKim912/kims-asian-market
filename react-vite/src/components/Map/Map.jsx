import { GoogleMap, Marker, useLoadScript } from "../../../node_modules/@react-google-maps/api";
import './Map.css';

function Map() {
    const libraries = ["places"];

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBFn64sgCcfalskP4E55PP2CoEE8qo1a8Y',
        libraries,
    });

    const center = {
        lat: 35.59009, // default latitude
        lng: -82.58199, // default longitude
    };

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }

    const mapContainerStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '15px'
    };

    return(
        <>
            <div className="map-container">
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={19}
                    center={center}
                >
                    <Marker position={center} />
                </GoogleMap>
            </div>
        </>
    );
}

export default Map;
