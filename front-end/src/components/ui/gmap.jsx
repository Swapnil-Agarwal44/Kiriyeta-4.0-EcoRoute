import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 28.6139,
  lng: 77.2090,
};

MyMapComponent = ()=> {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDh9x2BsTYNmPTW8EoMXQj5HMmHmcqFPec', // Replace with your API key
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      <Marker position={center} />
    </GoogleMap>
  );
}