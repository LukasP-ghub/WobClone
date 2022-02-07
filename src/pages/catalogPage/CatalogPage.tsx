import MainLayout from "../../layouts/mainLayout/MainLayout";
import Catalog from "../../features/catalog/Catalog";

const CatalogPage: React.FC<{ location: any }> = ({ location }) => {
  return (
    <MainLayout>
      <Catalog location={location} />
    </MainLayout>
  );
}

export default CatalogPage;