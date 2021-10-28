import {offerMock} from '../types/types';

const offers: offerMock[]  = [{
  bedrooms: 3,
  city: {
    location: {
      latitude: 50.864716,
      longitude: 3.349014,
      zoom: 10,
    },
    name: 'Paris',
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  host: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: 3,
    isPro: true,
    name: 'Angelina',
  },
  id: 1,
  images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/studio-01.jpg'],
  isFavorite: false,
  isPremium: true,
  location: {
    latitude: 48.866939,
    longitude: 2.385488,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'img/apartment-01.jpg',
  price: 120,
  rating: 4.8,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
},
{
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  host: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: 5,
    isPro: true,
    name: 'Angelina',
  },
  id: 2,
  images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/studio-01.jpg'],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 52.369553943508,
    longitude: 4.85309666406198,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'img/apartment-02.jpg',
  price: 120,
  rating: 4.5,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
},
{
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  host: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 8,
    isPro: true,
    name: 'Max',
  },
  id: 12,
  images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/studio-01.jpg'],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 52.3909553943508,
    longitude: 4.929309666406198,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'img/apartment-03.jpg',
  price: 120,
  rating: 2.8,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
},
{
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: ['Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  host: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: 45,
    isPro: true,
    name: 'Angelina',
  },
  id: 212,
  images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/studio-01.jpg'],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'img/apartment-01.jpg',
  price: 120,
  rating: 3.8,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
},
];

export default offers;
