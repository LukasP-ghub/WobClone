export type ProductCategories = {
  category_id: string;
  category_name: string;
  popular: boolean;
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
  author: {
    author_id: string,
    author_name: string
  }[];
  category: ProductCategories[];
  date: string;
  price: number;
  rating: {
    value: string,
    maxValue: string,
  };
  cover: string;
  discount?: {
    discount_id: string;
    discount_name: string
    discount_value: number;
  }[];
  pages: number;
  publication_date: string;
    language_name: string,
    language_code: string
  publisher: {
    publisher_id: string;
    publisher_name: string
  }
}

export type ChildrenProps = {
  children?: React.ReactNode;
};