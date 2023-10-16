import { Outlet } from 'react-router';
import { useWindowResize } from '@shared/hooks/useResize';
import Navbar from '@components/Navbar';
import Header from '@/modules/Header';
import Footer from '@components/Footer';
import styles from './LayoutWhithNavbar.module.scss';

function LayoutWhithNavbar() {
	const resize = useWindowResize();
	return (
		<>
			<Header />
			<div className={styles.content}>
				<Navbar />
				<main className={styles.inner} style={{ width: resize }}>
					<Outlet />
				</main>
				<Footer />
			</div>
		</>
	);
}

export default LayoutWhithNavbar;
