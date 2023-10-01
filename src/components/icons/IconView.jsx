import * as React from 'react';

export const SvgIconView = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={21}
		height={20}
		fill="none"
		{...props}
	>
		<rect width={8} height={8} x={1.258} y={11.5} stroke="#595D68" rx={0.5} />
		<rect width={8} height={8} x={1.5} y={0.5} stroke="#595D68" rx={0.5} />
		<rect width={8} height={8} x={12.5} y={11.5} stroke="#595D68" rx={0.5} />
		<rect width={8} height={8} x={12.5} y={0.5} stroke="#595D68" rx={0.5} />
	</svg>
);
