export interface NutritionalInfo {
  calories: string;
  carbs: string;
  protein: string;
  fat: string;
  allergens: string[];
}

export interface Dish {
  id: string;
  name: string;
  restaurant: string;
  distance: string;
  prepTime: string;
  price: number;
  originalPrice?: number;
  image: any; // string URL or local require asset
  gallery?: any[]; // Array of images for carousel
  tag?: string;
  isFavorite?: boolean;
  category: string;
  rating?: number;
  reviewsCount?: number;
  description?: string;
  nutritionalInfo?: NutritionalInfo;
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
