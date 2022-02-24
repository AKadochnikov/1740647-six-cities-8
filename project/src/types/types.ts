export type ActiveOfferId = {
  id: number | null;
};

export type City = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  }
  name: string;
}

export type OfferFromServer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: {
    id: number;
    name: string;
    'isPro': boolean,
    'avatarUrl': string,
  }
  id: number;
  images: string[];
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  }
  price: number;
  rating: number;
  title: string;
  type: string,
  'previewImage': string,
  'isFavorite': boolean,
  'isPremium': boolean,
  'maxAdults': number,
}

export type Offer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  }
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  }
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string,
}

export type CommentFromServer = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: {
    'avatarUrl': string,
    id: number,
    'isPro': boolean,
    name: string,
  }
}

export type Comment = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: {
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string,
}
}

export type PostComment = {
  comment: string,
  rating: number,
  id: number,
}

export type Params = {
  id: string;
}

export type Offers = Offer[];
export type Comments = Comment[];
export type SortBy = { [key: string]: string }
