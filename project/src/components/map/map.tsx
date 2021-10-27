import {useEffect, useRef} from 'react';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import {Marker, Icon} from 'leaflet';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';
import {ActiveOfferId, city, offerMock} from '../../types/types';

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
  offers: offerMock[];
  currentCity: city;
  activeOffer: ActiveOfferId;
}

function Map ({offers, currentCity, activeOffer}: mapProps):JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);
  useEffect(()=> {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(offer.id === activeOffer.id ? currentCustomIcon : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, offers, activeOffer]);
  return <div style={{height: '100%'}} ref={mapRef}/>;

}

export default Map;
