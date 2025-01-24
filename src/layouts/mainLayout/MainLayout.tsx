import AppHeader from "../../features/appHeader/AppHeader";
import { ChildrenProps } from "../../types/types";
import styles from './MainLayout.module.scss';

const { mainContent } = styles;



const MainLayout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <AppHeader />
      <main className={mainContent}>
        {children}
      </main>
    </>
  );
}

export default MainLayout;