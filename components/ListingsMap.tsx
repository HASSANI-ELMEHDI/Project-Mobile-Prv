import { Listing } from '@/interfaces/listing';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { View } from 'react-native';
import MapView,{ MapMarker, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
interface Geolocation {
    lon: number;
    lat: number;
  }
  
  interface Geometry {
    type: string;
    coordinates: [number, number];
  }
  
  const convertToGeometry = (geolocation: Geolocation): Geometry => {
    const { lon, lat } = geolocation;
    const geometry: Geometry = {
      type: 'Point',
      coordinates: [lon, lat],
    };
    return geometry;
  };

interface Props{
    listings:any
}
const ListingsMap = ({listings}:Props) => {
    const router=useRouter();
    const onMarker=(item:Listing)=>{
        router.push(`/listing/${item.id}`)
    }
  return (
    <View style={styles.container}>
    <MapView style={StyleSheet.absoluteFill} 
    provider={PROVIDER_GOOGLE}
    showsUserLocation showsMyLocationButton>
        {listings.map((item:any)=>(
            <MapMarker 
            onPress={()=>onMarker(item)}
            key={item.id}
            coordinate={{latitude:item.latitude,longitude:item.longitude}}>
                <View style={styles.marker}>
              <Text style={styles.markerText}>€ {item.price}</Text>
            </View>
            </MapMarker>
        ))}
        </MapView>
  </View>
  );
};
const styles = StyleSheet.create({
    markerText: {
        fontSize: 14,
        fontFamily: 'mon-sb',
      },
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
    marker: {
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: {
          width: 1,
          height: 10,
        },
      },
  });

export default ListingsMap;