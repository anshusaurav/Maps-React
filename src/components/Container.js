import React from 'react'
import GoogleApiComponent from './../mapUtilities/GoogleApiComponent'
import Map from './Map'
export class Container extends React.Component {
    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        }
        return (
            <div style={style}>
                <Map google={this.props.google}
                />
            </div>
        )
    }
}

export default GoogleApiComponent({
    apiKey: 'AIzaSyA5UEAy2FQgtkK3FaVOfnFFp9hVNAxxQTM'
})(Container)