export type ProductCategories = {
  category_name: string;
  popular: boolean;
}

export type Promotions = {
  category: {
    [key: string]: number,
  }
}

export interface ProductModel {
  id: string;
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
  ebook_id: string;
  cover: string;
  discount?: number;
  pages: number;
  publication_date: string;
  language_id: {
    language_name: string,
    language_code: string
  },
  publisher_id: {
    publisher_name: string
  }
}

export type ChildrenProps = {
  children?: React.ReactNode;
};