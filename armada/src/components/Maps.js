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
            className="mapStyle"
            google={this.props.google}
            zoom={15}
            style={this.props.mapStyle}
            initialCenter={{ lat: 55.533072, lng: 38.122171 }}
        >
            <Marker position={{ lat: 55.533072, lng: 38.122171 }} />
        </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAJYdm-xJ-K9aEVgYwszCQjHZUvMFHckj4",
})(Maps); 