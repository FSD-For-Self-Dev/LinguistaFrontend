import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</BrowserRouter>
);
