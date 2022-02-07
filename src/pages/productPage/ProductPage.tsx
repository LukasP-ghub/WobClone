import MainLayout from "../../layouts/mainLayout/MainLayout";
import ProductDetails from "../../features/productDetails/ProductDetails";

const ProductPage: React.FC<{ location: any }> = ({ location }) => {
  return (
    <MainLayout>
      <ProductDetails location={location} />
    </MainLayout>
  );
}

export default ProductPage;