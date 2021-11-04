import {useEffect, useRef} from 'react';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import {Icon, LayerGroup, layerGroup, Marker} from 'leaflet';
import {MARKER_CURRENT, MARKER_DEFAULT} from '../../const';
import {ActiveOfferId} from '../../types/types';
import {getLocation} from '../../utils';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {getCity, getFilteredOffers} from '../../store/data/selectors';
import {useState} from 'react';

const currentCustomIcon = new Icon({
  iconUrl: MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const defaultCustomIcon = new Icon({
  iconUrl: MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

type mapProps = {
  activeOffer: ActiveOfferId;
}

const mapStateToProps = (state: State) => ({
  city: getCity(state),
  filteredOffers: getFilteredOffers(state),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & mapProps;

function Map (props: ConnectedComponentProps):JSX.Element {
  const mapRef = useRef(null);
  const {activeOffer, city, filteredOffers} = props;
  const currentCity= getLocation(city);
  const map = useMap(mapRef, currentCity);
  const [layers] = useState<LayerGroup>(layerGroup());

  useEffect(()=> {
    map?.flyTo([currentCity.location.latitude, currentCity.location.longitude], currentCity.location.zoom);
  },[city]);

  useEffect(() => {
    if (map) {
      layers.clearLayers();
      if (filteredOffers.length > 0) {
        filteredOffers.forEach((offer) => {
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
  }, [map, filteredOffers, activeOffer, city]);

  return <div style={{height: '100%'}} ref={mapRef}/>;
}

export default connector(Map);
