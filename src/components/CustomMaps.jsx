import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import styled, { css } from '@emotion/native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

import MapAutocomplete from './MapAutocomplete';

const CustomMaps = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      if (location) {
        mapRef.current.animateToRegion(
          {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          2000,
        );
      }
    })();
  }, []);
  const [marker, setMarker] = useState(null);
  const mapRef = useRef();

  const mapOnPressHandler = (e) => {
    setMarker(e.nativeEvent.coordinate);
    console.log(e.nativeEvent.coordinate);
  };

  const onPlaceSelect = (data, details = null) => {
    console.log(data, details);
    setMarker({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
    });

    mapRef.current.animateToRegion(
      {
        latitude: details.geometry.location.lat,
        longitude: details.geometry.location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      2000,
    );
  };

  return (
    <MainContainer>
      <MapAutocomplete onPlaceSelect={onPlaceSelect} />
      <MapView
        ref={mapRef}
        style={{ height: '60%' }}
        initialRegion={{
          latitude: location ? location.coords.latitude : 39.78825,
          longitude: location ? location.coords.longitude : -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={mapOnPressHandler}>
        {marker && (
          <Marker coordinate={marker} title={'Название маркера'} description={'Описание маркера'} />
        )}
      </MapView>
    </MainContainer>
  );
};

const MainContainer = styled(View)`
  width: 100%;
  height: 300px;
`;

export default CustomMaps;
