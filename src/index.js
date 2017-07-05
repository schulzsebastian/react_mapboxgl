import React from 'react'
import ReactDOM from 'react-dom'
import MapboxGL from './MapboxGLComponent'
 
class App extends React.Component {
  render() {
    const style = {
      height: "100vh"
    }
    return (
      <div style={style}>
        <MapboxGL />
      </div>
    )
  } 
}

ReactDOM.render(<App />, document.getElementById('root'))