class ProductModel {
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
    value: number,
    maxValue: number,
  };
  id: number;

  constructor(product: any) {
    this.title = `${product.title}`;
    this.description = `${product.description}`;
    this.author = {
      firstName: `${product.author.firstName}`,
      lastName: `${product.author.lastName}`,
    };
    this.category = `${product.category}`;
    this.date = `${product.date}`;
    this.price = product.price * 1;
    this.rating = {
      value: product.rating.value * 1,
      maxValue: product.rating.maxValue * 1,
    };
    this.id = product.id * 1;
  }
}

export default ProductModel;