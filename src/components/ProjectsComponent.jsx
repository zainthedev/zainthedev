import { Projects, Project, ProjectImage, ColorText } from '../styled-components/projectsStyles';
import { About, MainImage, Description } from '../styled-components/aboutStyles';
import {
	ColumnWrapper,
	TextColumnWrapper,
	Heading,
	Subheading,
	Button,
} from '../styled-components/globalStyles';
import { useViewportScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EmojiComponent } from './EmojiComponent';
import reactagram1 from '../images/reactagram1.png';
import reactagram2 from '../images/reactagram2.png';

export const ProjectsComponent = ({ forwardedRef }) => {
	return (
		<Projects animate='visible' ref={forwardedRef}>
			<Heading>Projects</Heading>
			<Project>
				<ColumnWrapper>
					<ProjectImage src={reactagram1} />
					<ProjectImage src={reactagram2} />
				</ColumnWrapper>
				<TextColumnWrapper>
					<Subheading>Reactagram</Subheading>
					<Description>
						Created with <ColorText>React, TypeScript and Firebase</ColorText>, Reactagram is an
						Instagram clone featuring most of the core features of Instagram.
						{'\n'}
						{'\n'}
						Features:
						<ul>
							<li>• Login with Gmail or create your own account</li>
							<li>• Crop and upload images with captions, tags and a location to your profile</li>
							<li>• View user profiles with dynamic routing</li>
							<li>• Search for, follow and tag other users in your posts</li>
							<li>• Comment on and Like other users' posts</li>
							<li>• View the posts of the users you follow on the home page</li>
							<li>• View the explore page to view all posts on to Reactagram</li>
							<li>• Receive notifications upon user interaction</li>
						</ul>
						{'\n'}
						For this project, I set out to build the most complete clone of Instagram on the
						internet. Shoot for the moon and land amongst the stars, right?
						{'\n'}
						Hammering down the functionality and interaction with Firebase was undoubtedly one of
						the biggest challenges of this project. I also had a tough time with the dynamic routing
						for user profiles, but with some grit and perseverance, I overcame these challenges.
					</Description>
				</TextColumnWrapper>
			</Project>
		</Projects>
	);
};
