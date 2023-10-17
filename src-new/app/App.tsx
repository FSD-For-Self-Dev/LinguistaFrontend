/* eslint-disable react-refresh/only-export-components */
import { withProviders } from './provider';
import { Routing } from '../pages';

function App() {
	return <Routing />;
}

export default withProviders(<App />);
