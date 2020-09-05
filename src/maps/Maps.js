
import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const apiMaps = "AIzaSyA5UEAy2FQgtkK3FaVOfnFFp9hVNAxxQTM";

const mapStyles = {
    width: "90%",
    heigth: "100%"
};

export class MapContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: 32,
            lng: 76
        };
    }
    displayMarkers = () => {
        return this.state.venues.map((venue, index) => {
            return (
                <Marker
                    key={index}
                    id={index}
                    position={{
                        lat: venue.lat,
                        lng: venue.lng
                    }}
                    onClick={() => console.log(this.state.venues)}
                />
            );
        });
    };
    componentDidMount() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {

                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
                this.setState(
                    {
                        venues: this.state.venues.concat([
                            { lat: position.coords.latitude, lng: position.coords.longitude }
                        ])
                    },
                    () => {
                        console.log("Venues", this.state.venues);
                    }
                );
            });


        } else {
            console.log("Not Available");
        }
    }



    render() {
        return (
            <Map
                google={this.props.google}
                zoom={9}
                style={mapStyles}
                initialCenter={{ lat: this.state.lat, lng: this.state.lng }}
            >
                {this.displayMarkers()}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: apiMaps
})(MapContainer);