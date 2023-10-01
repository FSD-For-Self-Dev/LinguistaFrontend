import * as React from 'react';

export const SvgIconCopy = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={13}
		height={13}
		fill="none"
		{...props}
	>
		<g fill="#383838" clipPath="url(#icon_copy_svg__a)">
			<path
				fillRule="evenodd"
				d="M3.868 1.125c-1.035 0-1.875.84-1.875 1.875v6c0 1.036.84 1.875 1.875 1.875h4c1.036 0 1.875-.84 1.875-1.875V3c0-1.036-.84-1.875-1.875-1.875h-4ZM2.743 3c0-.621.504-1.125 1.125-1.125h4c.621 0 1.125.504 1.125 1.125v6c0 .621-.504 1.125-1.125 1.125h-4A1.125 1.125 0 0 1 2.743 9V3Z"
				clipRule="evenodd"
			/>
			<path d="M11.243 5a.375.375 0 0 0-.75 0v4.25a2.375 2.375 0 0 1-2.375 2.375h-3.25a.375.375 0 0 0 0 .75h3.25c1.726 0 3.125-1.4 3.125-3.125V5Z" />
		</g>
		<defs>
			<clipPath id="icon_copy_svg__a">
				<path fill="#fff" d="M.368.5h12v12h-12z" />
			</clipPath>
		</defs>
	</svg>
);
