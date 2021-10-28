import {useEffect, useRef} from 'react';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import {Marker, Icon, layerGroup} from 'leaflet';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';
import {ActiveOfferId} from '../../types/types';
import {getLocation} from '../../utils';
import {State} from '../../types/state-types';
import {connect, ConnectedProps} from 'react-redux';

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

type mapProps = {
  activeOffer: ActiveOfferId;
}

const mapStateToProps = ({city, offers}: State) => ({
  city,
  offers,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & mapProps;

function Map (props: ConnectedComponentProps):JSX.Element {
  const {activeOffer, city, offers} = props;
  const currentCity= getLocation(city);
  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);
  useEffect(()=> {
    map?.flyTo([currentCity.location.latitude, currentCity.location.longitude], currentCity.location.zoom);
    if (map) {
      const layers = layerGroup().addTo(map);
      if (offers.length > 0) {
        offers.forEach((offer) => {
          const marker = new Marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          });

          marker
            .setIcon(offer.id === activeOffer.id ? currentCustomIcon : defaultCustomIcon)
            .addTo(layers);
        });
      }
    }
  }, [map, offers, activeOffer, city]);
  return <div style={{height: '100%'}} ref={mapRef}/>;
}

export default connector(Map);
