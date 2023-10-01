import * as React from 'react';

export const SvgStatusNotActive = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={17}
		height={16}
		fill="none"
		{...props}
	>
		<circle
			cx={8.5}
			cy={8}
			r={7}
			stroke={props.color || '#656A76'}
			strokeWidth={2}
		/>
	</svg>
);
