import Navbar from '@components/Navbar';
import Header from '@components/Header';
import Footer from '@components/Footer';
import styles from './LayoutWhithNavbar.module.scss';
import { Outlet } from 'react-router';

function LayoutWhithNavbar() {
	return (
		<>
			<Header />
			<div className={styles.content}>
				<Navbar />
				<main className={styles.inner}>
					<Outlet />
				</main>
				<Footer />
			</div>
		</>
	);
}

export default LayoutWhithNavbar;
