class InfoWindow extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        if (this.props.map !== prevProps.map) {
            this.renderInfoWindow();
        }
    }

    renderInfoWindow() {
        let { map, google, mapCenter } = this.props;

        const iw = this.infowindow = new google.maps.InfoWindow({
            content: ''
        });

        google.maps.event
            .addListener(iw, 'closeclick', this.onClose.bind(this))
        google.maps.event
            .addListener(iw, 'domready', this.onOpen.bind(this));
    }

    onOpen() {
        if (this.props.onOpen) this.props.onOpen();
    }

    onClose() {
        if (this.props.onClose) this.props.onClose();
    }
}
export default InfoWindow