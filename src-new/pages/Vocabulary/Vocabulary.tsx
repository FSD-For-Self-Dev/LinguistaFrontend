import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../../features/changeLanguage/ui/LanguageSwitcher';
const Vocabulary = () => {
	const { t } = useTranslation('vocabulary');

	return (
		<div>
			{t('addToVocabulary')} <LanguageSwitcher />{' '}
		</div>
	);
};

export default Vocabulary;
