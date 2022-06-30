import React from 'react';
import { ImageBackground , StyleSheet , View , Image , Text , BimTex  } from 'react-native';
import { BimColors , BimConfiguration } from '../settings';
import MapView , { Marker }  from 'react-native-maps';
import useLocation from '../utility/hooks/useLocation';
import BimIcon from './BimIcon';

// const arcTriumph = { latitude: 48.87389506, longitude: 2.295039178 , latitudeDelta: 0.01, longitudeDelta: 0.01};
// const revolutionSquare = { latitude: 35.7012505, longitude: 51.39113148 , latitudeDelta: 0.01, longitudeDelta: 0.01};


function BimMapView({
  initialRegion ,
  regionMarkers = [],
  markerIconSize = 100,
  showsUserLocation = false,
  zoomTapEnabled = true,
  ... otherProps
}) {

const location = useLocation()
const mapView = React.useRef();
const zoomInCurrentLocation = (location) =>{
  //mapView.current.animateToRegion( location , 1000 )
}
React.useEffect( () => { 
  //if(showsUserLocation)
  //  zoomInCurrentLocation(location) ;
} , []);

    return (
      <View style={styles.mapContainer}> 
        <MapView
          ref={mapView}
          initialRegion={initialRegion}
          style={styles.map} 
          showsUserLocation={showsUserLocation}
          zoomTapEnabled={zoomTapEnabled}
          {... otherProps}
        >
          { regionMarkers &&
            regionMarkers.map( (marker) => 
            <Marker key={marker.Id} coordinate={marker.region}  title={marker.title} description={marker.description}>
              <BimIcon wrappedInaCircle={false} name="map-marker" size={markerIconSize} iconColor='red' backgroundColor = 'white' />         
            </Marker>          
          )}

        </MapView>
      </View>
  );
}
const styles = StyleSheet.create({    
  mapContainer:{
    flex:1 , 
    width:'100%' , 
    borderWidth:0 , 
    borderColor:'red'
  } ,
  map: {
    width : '100%',
    height : '100%',
    alignSelf:'stretch',
  },       
});
export default BimMapView;

