import { useTranslation } from 'react-i18next';
const Vocabulary = () => {
	const { t } = useTranslation('vocabulary');

	return <div>{t('addToVocabulary')}</div>;
};

export default Vocabulary;
