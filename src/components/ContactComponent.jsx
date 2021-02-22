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
				{!copied ? (
					<Button onClick={copyToClipboard}>COPY</Button>
				) : (
					<Button style={{ background: '#1b998b' }}>COPIED!</Button>
				)}
			</ContactInfo>
			<ContactInfo>
				<Icon
					onClick={() => window.open('www.linkedin.com/in/zain-hill-8508351bb')}
					src={linkedinIcon}
					alt='LinkedIn'
				/>
			</ContactInfo>
			<ContactInfo>
				<Icon
					onClick={() => window.open('https://github.com/zainthedev/')}
					src={githubIcon}
					alt='Github'
				/>
			</ContactInfo>
		</Contact>
	);
};
