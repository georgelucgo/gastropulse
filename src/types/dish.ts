export interface Dish {
  id: string;
  name: string;
  restaurant: string;
  distance: string;
  prepTime: string;
  price: number;
  originalPrice?: number;
  image: any; // string URL or local require asset
  tag?: string;
  isFavorite?: boolean;
  category: string;
  rating?: number;
  reviewsCount?: number;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  iconName?: string;
  isActive?: boolean;
}

export interface CouponStatus {
  used: number;
  total: number;
}
