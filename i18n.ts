import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { LANGUAGES } from '@/utils/constants';

export default i18n
	.use(Backend)
	.use(initReactI18next)
	.init({
		debug: true,
		lng: LANGUAGES[0],
		fallbackLng: LANGUAGES,
		ns: [], // files to load  ns: ['app', 'common'],
		interpolation: { escapeValue: false },
	});
