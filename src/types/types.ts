export type ProductCategories = {
  category: string;
  popular: boolean;
}

export type Promotions = {
  category: {
    [key: string]: number,
  }
}

export interface ProductModel {
  title: string;
  description: string;
  author: {
    firstName: string,
    lastName: string,
  };
  category: string;
  date: string;
  price: number;
  rating: {
    value: string,
    maxValue: string,
  };
  id: string;
  cover: string;
  discount?: number;
}

