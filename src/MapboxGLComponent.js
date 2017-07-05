import React from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'
 
class MapboxGLComponent extends React.Component {

  constructor() {
    super()
    this.state = {
      map: null,
    }
  }
  
  componentDidMount() {
    this.state.map = new mapboxgl.Map({
      container: 'map',
      style: 'https://openmaptiles.github.io/osm-bright-gl-style/style-cdn.json',
      center: [52.14, 16.2],
      zoom: 3
    })
    this.state.map.on('click', this.mapClick.bind(this))
  }

  mapClick(e) {
    alert(e.lngLat)
  }

  render() {
    const mapStyle = {
      height:"100%",
      width:"100%"
    }
    return (
      <div id="map" style={mapStyle}></div>
    )
  }
}

export default MapboxGLComponent