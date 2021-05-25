class ProductModel {
  title: string;
  description: string;
  author: {
    firstName: string,
    lastName: string,
  };
  category: string;
  date: string;
  price: string;
  rating: {
    value: number,
    maxValue: number,
  };
  id: number;
  cover: string;

  constructor(product: any) {
    this.title = product.title;
    this.description = product.description;
    this.author = {
      firstName: product.author.firstName,
      lastName: product.author.lastName,
    };
    this.category = product.category;
    this.date = product.date;
    this.price = product.price;
    this.rating = {
      value: product.rating.value,
      maxValue: product.rating.maxValue,
    };
    this.id = product.id;
    this.cover = product.cover;
  }
}

export default ProductModel;