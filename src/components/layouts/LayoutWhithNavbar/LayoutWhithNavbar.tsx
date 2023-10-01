import Navbar from '@components/Navbar';
import Header from '@components/Header';
import Footer from '@components/Footer';
import styles from './LayoutWhithNavbar.module.scss';

interface Props {
	children: React.ReactNode;
}

function LayoutWhithNavbar({ children }: Props) {
	return (
		<div className={styles.layout}>
			<Header />
			<div className={styles.content}>
				<Navbar />
				{children}
				<Footer />
			</div>
		</div>
	);
}

export default LayoutWhithNavbar;
