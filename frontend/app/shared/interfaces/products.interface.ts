export interface IProductForShop {
  id: number;
  previewImage: string;
  available: boolean;
  title: string;
  pricePerDay: number;
  pricePerWeek: number;
}

export type ProductsForShop = IProductForShop[];

interface Category {
  id: number;
  text: string;
}

export interface IReviewForProduct {
  id: true;
  text: string;
  createdAt: Date;
  user: { name: string };
}

interface Image {
  id: number;
  url: string;
}

export interface ISingleProduct {
  id: number;
  available: boolean;
  previewImage: string;
  title: string;
  players: string;
  time: string;
  age: string;
  pricePerDay: number;
  pricePerWeek: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  images: Image[];
  categories: Category[];
  reviews: IReviewForProduct[];
}
