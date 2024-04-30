import React, { useEffect, useState } from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import {RiUserLocationFill} from 'react-icons/ri'

const Api_key = "pk.eyJ1IjoidGF1a2lyMDMiLCJhIjoiY2x2NHFqejEwMGQ5bTJpbzltOWU4anMyeiJ9.BLXMF9Pv4lmaBFdVIQe9sg"

const Map = ({lat , lon }) => {

    const [viewport, setViewport] = useState({
        latitude: lat,
        longitude: lon,
        zoom: 14,
        bearing: 0,
        pitch: 0,
        width: '100%',
        height: '100%',
    })
}

useEffect(() => {
    const a = {... viewport}
    a.latitude = lat
    a.longitude = lon
    setViewport(a)
}, [lat, lon])

function Maps() {
  return (
    <>
        <div class="map w-550 h-350 border-4 border-blue-500">


        <ReactMapGL mapboxApiAccessToken={Api_key}
        {...viewport}
        onViewportChange='mapbox://styles/mapbox/streets-v11'>
        <Marker latitude={lat} longitude={lon} >
        <div class="mark p-40 rounded-full bg-blue-200">
            <RiUserLocationFill size='25px' color='blue' />
        </div>
        </Marker>
        </ReactMapGL>
    </div>
    </>
  )
}

export default Maps