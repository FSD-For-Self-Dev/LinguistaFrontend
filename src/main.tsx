import ReactDOM from 'react-dom/client';
import '@app/styles/global.scss';
import '@entities/languages';
import App from '@app/App';
import withProviders from '@app/provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  withProviders(<App />),
);
