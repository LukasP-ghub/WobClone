export type ProductCategories = {
  category_id: string;
  category_name: string;
  popular: boolean;
}

export type ProductAuthors = {
  author_id: string;
  author_name: string;
}

export type ProductRating = {
  value: string;
  maxValue: string;
}

export type ProductCover = {
  cover_id: string;
  cover_name: string;
  cover_size: number;
  cover_url: string;
}

export type ProductDiscount = {
  discount_id: string;
  discount_name: string;
  discount_value: number;
}

export type ProductPublisher = {
  publisher_id: string;
  publisher_name: string;
}

export type Promotions = {
  category: {
    [key: string]: number,
  }
}

export interface ProductModel {
  ebook_id: string;
  title: string;
  description: string;
  date: string;
  price: number;
  pages: number;
  publication_date: string;
  language_name: string;
  language_code: string;
  rating: ProductRating;
  publisher: ProductPublisher;
  author: ProductAuthors[];
  category: ProductCategories[];
  cover: ProductCover[];
  discount: ProductDiscount[];
}

export interface FilterEbookQuery {
  phrase?: string;
  maxPrice?: number;
  minPrice?: number;
  sorting?: 'ASC' | 'DESC';
  limit?: number;
  page?: number;
  category?: string;
}

export type ChildrenProps = {
  children?: React.ReactNode;
};