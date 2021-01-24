import React from 'react'
import GoogleMapReact from 'google-map-react';
import {
    EnvironmentFilled,
  } from '@ant-design/icons';


  

class Map extends React.Component {
    static defaultProps = {
      center: {lat: 19.54265667796079, lng: -99.1972600827487},
      zoom: 17
    };
  
    render() {
      return (
        <div style={{ height: '60vh', width: '40%', }}>

         <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <EnvironmentFilled
          style={{fontSize:'30px', color:'#D6494E', borderRadius:'10px'}}
            lat={19.54265667796079} 
            lng={-99.1972600827487} 
            text={'Servibev'} 
          />
        </GoogleMapReact>
        </div>

      );
    }
  }


export default Map