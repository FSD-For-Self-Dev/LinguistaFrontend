import { CustomLink } from '../../../5_shared/ui';
import { ButtonIcon } from '../../../5_shared/ui';

import SvgIconYoutube from '@assets/icons/socials/youtube.svg?react';
import SvgIconTelegram from '@assets/icons/socials/telegram.svg?react';
import SvgIconVk from '@assets/icons/socials/vk.svg?react';
import SvgIconDiscord from '@assets/icons/socials/discord.svg?react';
import SvgIconGithub from '@assets/icons/socials/github.svg?react';

import styles from './SocialsList.module.scss';

export default function SocialsList() {
	return (
		<ul className={styles.socials}>
			<li>
				<CustomLink apperance="regular" href="#" target="_blank">
					<ButtonIcon className={styles.icon}>
						<SvgIconYoutube className={styles.svg} />
					</ButtonIcon>
				</CustomLink>
			</li>
			<li>
				<CustomLink apperance="regular" href="#" target="_blank">
					<ButtonIcon className={styles.icon}>
						<SvgIconTelegram className={styles.svg} />
					</ButtonIcon>
				</CustomLink>
			</li>
			<li>
				<CustomLink apperance="regular" href="#" target="_blank">
					<ButtonIcon className={styles.icon}>
						<SvgIconVk className={styles.svg} />
					</ButtonIcon>
				</CustomLink>
			</li>
			<li>
				<CustomLink apperance="regular" href="#" target="_blank">
					<ButtonIcon className={styles.icon}>
						<SvgIconDiscord className={styles.svg} />
					</ButtonIcon>
				</CustomLink>
			</li>
			<li>
				<CustomLink apperance="regular" href="#" target="_blank">
					<ButtonIcon className={styles.icon}>
						<SvgIconGithub className={styles.svg} />
					</ButtonIcon>
				</CustomLink>
			</li>
		</ul>
	);
}
