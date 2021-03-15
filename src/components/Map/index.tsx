import { MapContainer, TileLayer, Marker } from 'react-leaflet'

export interface Place {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export interface MapProps {
  places?: Place[]
}

const Map = ({ places }: MapProps) => (
  <MapContainer
    center={[51.505, -0.09]}
    zoom={3}
    style={{ height: '100%', width: '100%' }}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {places?.map(({ id, name, location }) => {
      const { latitude, longitude } = location
      return (
        <Marker
          position={[latitude, longitude]}
          key={`place-${id}`}
          title={name}
        ></Marker>
      )
    })}
  </MapContainer>
)

export default Map