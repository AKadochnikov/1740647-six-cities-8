import {useEffect, useRef} from 'react';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import {Icon, layerGroup, Marker} from 'leaflet';
import {MARKER_CURRENT, MARKER_DEFAULT} from '../../const';
import {ActiveOfferId, Offers} from '../../types/types';
import {getLocation} from '../../utils';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {getCity} from '../../store/data/selectors';
import {useMemo} from 'react';

const currentCustomIcon = new Icon({
  iconUrl: MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const defaultCustomIcon = new Icon({
  iconUrl: MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

type mapProps = {
  activeOffer: ActiveOfferId;
  offers: Offers;
}

const mapStateToProps = (state: State) => ({
  city: getCity(state),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & mapProps;

function Map (props: ConnectedComponentProps):JSX.Element {
  const mapRef = useRef(null);
  const {activeOffer, city, offers} = props;
  const currentCity= getLocation(city);
  const map = useMap(mapRef, currentCity);
  const layers = useMemo(() => layerGroup(), []);

  useEffect(()=> {
    map?.flyTo([currentCity.location.latitude, currentCity.location.longitude], currentCity.location.zoom);
  },[city]);

  useEffect(() => {
    if (map) {
      layers.clearLayers();
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
      map.addLayer(layers);
    }
  }, [map, offers, activeOffer, city]);

  return <div style={{height: '100%', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1144px'}} ref={mapRef}/>;
}

export default connector(Map);
