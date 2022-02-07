import HeaderUserLinks from '../../components/headerUserLinks/HeaderUserLinks';
import TopBarFixed from '../../components/topBarFixed/TopBarFixed';
import styles from './SmallHeaderLayout.module.scss';

const { main, wrapper } = styles;

const SmallHeaderLayout: React.FC = ({ children }) => {
  return <div className={wrapper}>
    <TopBarFixed>
      <HeaderUserLinks />
    </TopBarFixed>
    <main className={main}>
      {children}
    </main>
  </div>
}

export default SmallHeaderLayout;