import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const apiMaps = "AIzaSyA5UEAy2FQgtkK3FaVOfnFFp9hVNAxxQTM";

const mapStyles = {
    width: "100%",
    heigth: "100%"
};

export class MapContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            venues: [{ lat: 32.219044, lng: 76.323402 }]
        };
    }

    displayMarkers = () => {
        return this.state.venues.map((venue, index) => {
            return (
                <Marker
                    key={index}
                    id={index}
                    position={{
                        lat: venue.latitude,
                        lng: venue.longitude
                    }}
                    onClick={() => console.log(this.state.venues)}
                />
            );
        });
    };

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 32.219044, lng: 76.323402 }}
            >
                {this.displayMarkers()}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: apiMaps
})(MapContainer);
