import ProductDetails from "../../features/productDetails/ProductDetails";
import MainLayout from "../../layouts/mainLayout/MainLayout";

const ProductPage: React.FC = () => {
  return (
    <MainLayout>
      <ProductDetails />
    </MainLayout>
  );
}

export default ProductPage;