import AppHeader from "../../features/appHeader/AppHeader";
import styles from './MainLayout.module.scss';

const { mainContent } = styles;

const MainLayout: React.FC = ({ children }) => {
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