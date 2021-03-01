import { useRef, useState } from 'react';
import { Heading, Button } from '../styled-components/globalStyles';
import { Contact, ContactInfo, ContactText, Icon } from '../styled-components/contactStyles';
import linkedinIcon from '../images/linkedinIcon.svg';
import githubIcon from '../images/githubIcon.svg';

export const ContactComponent = ({ forwardedRef }) => {
	const [copied, setCopied] = useState(false);
	const textAreaRef = useRef(null);

	function copyToClipboard() {
		if (copied === false) {
			window.getSelection().removeAllRanges();
			const range = document.createRange();
			range.selectNode(textAreaRef.current);
			window.getSelection().addRange(range);
			document.execCommand('copy');
			window.getSelection().removeAllRanges();
			setCopied(true);
			setTimeout(() => {
				setCopied(false);
			}, 1000);
		}
	}

	return (
		<Contact animate='visible' ref={forwardedRef}>
			<Heading>Get in touch</Heading>
			<ContactInfo>
				<ContactText ref={textAreaRef} value='zainthedev@gmail.com'>
					zainthedev@gmail.com
				</ContactText>
				<Button onClick={copyToClipboard}>{!copied ? 'COPY' : 'COPIED!'}</Button>
			</ContactInfo>
			<ContactInfo>
				<a href='https://linkedin.com/in/zain-hill-8508351bb'>
					<Icon src={linkedinIcon} alt='LinkedIn'></Icon>
				</a>
			</ContactInfo>
			<ContactInfo>
				<a href='https://github.com/zainthedev/'>
					<Icon src={githubIcon} alt='Github' />
				</a>
			</ContactInfo>
		</Contact>
	);
};
