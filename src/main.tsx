import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from '@components/Loader';
import App from './app/App';
import './i18n';
import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<React.StrictMode>
			<Suspense fallback={<Loader />}>
				<App />
			</Suspense>
		</React.StrictMode>
	</BrowserRouter>
);
