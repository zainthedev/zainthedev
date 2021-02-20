export const EmojiComponent = ({ label, symbol }) => (
	<span
		className='emoji'
		role='img'
		aria-label={label ? label : ''}
		aria-hidden={label ? 'false' : 'true'}
	>
		{symbol}
	</span>
);
