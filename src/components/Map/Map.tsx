import Map, {Marker} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYmFzaWxhc2xhbSIsImEiOiJja2xxbnRxNnIxNG1nMm9xbXI0NjRleGUzIn0.A7Hatnm9PiOjcD7lvog0lQ'; // Set your mapbox token here

function Root({lat, lng, width, height}:{lat:string, lng:string, width: number, height: number}) {

	const latitude = parseInt(lat)
	const longitude = parseInt(lng)
  return (
    <div className=''>
    <Map
      initialViewState={{
        latitude ,
        longitude,
        zoom: 14
      }}
      style={{width, height}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <Marker longitude={longitude} latitude={latitude} color="red" />
    </Map>
    </div>
    
  );
}

export default Root