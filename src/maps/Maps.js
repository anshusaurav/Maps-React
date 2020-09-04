// import React from "react";
// import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

// const apiMaps = "AIzaSyA5UEAy2FQgtkK3FaVOfnFFp9hVNAxxQTM";

// const mapStyles = {
//     width: "90%",
//     heigth: "100%"
// };

// export class MapContainer extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             venues: [{ lat: 32.219044, lng: 76.323402 }],
//             initLat: 30.55,
//             initLong: 67.99
//         };
//     }
//     componentDidMount() {
//         if ("geolocation" in navigator) {
//             console.log("Available");
//             navigator.geolocation.getCurrentPosition((position) => {
//                 console.log("Latitude is :", position.coords.latitude);
//                 console.log("Longitude is :", position.coords.longitude);
//                 // this.setState({ initLat: position.coords.latitude, initLong: position.coords.longitude })
//             });
//         } else {
//             console.log("Not Available");
//         }
//     }


//     displayMarkers = () => {
//         return this.state.venues.map((venue, index) => {
//             return (
//                 <Marker
//                     key={index}
//                     id={index}
//                     position={{
//                         lat: venue.latitude,
//                         lng: venue.longitude
//                     }}
//                     onClick={() => console.log(this.state.venues)}
//                 />
//             );
//         });
//     };

//     render() {
//         return (
//             <Map
//                 google={this.props.google}
//                 zoom={17}
//                 style={mapStyles}
//                 initialCenter={{ lat: 32.219044, lng: 76.323402 }}
//             >
//                 {this.displayMarkers()}
//             </Map>
//         );
//     }
// }

// export default GoogleApiWrapper({
//     apiKey: apiMaps
// })(MapContainer);
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
            venues: [{ lat: 32.5, lng: 76 }, { lat: 33.5, lng: 76 }, { lat: 33, lng: 76 }, { lat: 34, lng: 76 }],
            lat: 32,
            lng: 76
        };
    }
    componentDidMount() {
        if ("geolocation" in navigator) {
            console.log("Available");
            navigator.geolocation.getCurrentPosition((position) => {
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
                this.setState({ lat: position.coords.latitude, lng: position.coords.longitude })
            });
        } else {
            console.log("Not Available");
        }
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

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={12}
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