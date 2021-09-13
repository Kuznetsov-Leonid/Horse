/**
 * Create by Kuznetsov Leonid 
 * 20:00  13.09.2021
 */ 
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, MapContainer } from 'google-maps-react';

export class Maps extends React.Component {
    render() {
        return (
        <Map 
            google={this.props.google}
            zoom={8}
            style={this.props.mapStyle}
            initialCenter={{ lat: 9.761927, lng: 79.95244 }}
        >
            <Marker position={{ lat: 9.761927, lng: 79.95244 }} />
        </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAJYdm-xJ-K9aEVgYwszCQjHZUvMFHckj4",
})(Maps);