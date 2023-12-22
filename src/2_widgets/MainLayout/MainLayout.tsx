import { Outlet } from 'react-router-dom';

import NavbarLayout from '../NavbarLayout/NavbarLayout';
import FooterLayout from '../FooterLayout/FooterLayout';
import HeaderLayout from '../HeaderLayout/HeaderLayout';
import { useWindowResize } from '@shared/model';
import styles from './MainLayout.module.scss';

const MainLayout = () => {
  const resize = useWindowResize();

  return (
    <>
      <HeaderLayout />
      <div className={styles.content}>
        <NavbarLayout />
        <main className={styles.inner} style={{ width: resize }}>
          <Outlet />
        </main>
        <FooterLayout />
      </div>
    </>
  );
};

export default MainLayout;
