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
export type Offer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: {
    avatarUrl?: string;
    id: number;
    isPro?: boolean;
    name: string;
    'is_pro'?: boolean,
    'avatar_url'?: string,
  }
  id: number;
  images: string[];
  isFavorite?: boolean;
  isPremium?: boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  }
  maxAdults?: number;
  previewImage?: string;
  price: number;
  rating: number;
  title: string;
  type: string,
  'preview_image'?: string,
  'is_favorite'?: boolean,
  'is_premium'?: boolean,
  'max_adults'?: number,
}

export type Comment = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: {
   'avatar_url'?: string,
    avatarUrl?: string,
    id: number,
    'is_pro'?: boolean,
    isPro?: boolean,
    name: string,
}
}

export type Offers = Offer[];
export type Comments = Comment[];
export type SortBy = { [key: string]: string }
