import {layerGroup} from 'leaflet';

enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const BACKEND_URL = 'https://8.react.pages.academy/six-cities';

const REQUEST_TIME_OUT = 5000;

const LOCATIONS = [
  {
    city: {
      location: {
        latitude: 48.864716,
        longitude: 2.349014,
        zoom: 10,
      },
      name: 'Paris',
    },
  },
  {
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
  },
  {
    city: {
      location: {
        latitude: 50.935173,
        longitude: 6.953101,
        zoom: 10,
      },
      name: 'Cologne',
    },
  },
  {
    city: {
      location: {
        latitude: 50.850346,
        longitude: 4.351721,
        zoom: 10,
      },
      name: 'Brussels',
    },
  },
  {
    city: {
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 10,
      },
      name: 'Hamburg',
    },
  },
  {
    city: {
      location: {
        latitude: 51.233334,
        longitude: 6.783333,
        zoom: 10,
      },
      name: 'Dusseldorf',
    },
  },
];

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const DEFAULT_CITY = 'Paris';

const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

const LAYERS = layerGroup();
export {AppRoute, AuthorizationStatus, URL_MARKER_CURRENT, URL_MARKER_DEFAULT, DEFAULT_CITY, CITIES, LOCATIONS, LAYERS, BACKEND_URL, REQUEST_TIME_OUT};

