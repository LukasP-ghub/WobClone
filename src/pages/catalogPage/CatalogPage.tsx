import Catalog from "../../features/catalog/Catalog";
import MainLayout from "../../layouts/mainLayout/MainLayout";

const CatalogPage: React.FC = () => {
  return (
    <MainLayout>
      <Catalog  />
    </MainLayout>
  );
}

export default CatalogPage;