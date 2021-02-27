import {
	Projects,
	Project,
	ProjectSubheading,
	ProjectImagesWrapper,
	WideProjectImage,
	ProjectTextWrapper,
	ColorText,
} from '../styled-components/projectsStyles';
import { Description } from '../styled-components/aboutStyles';
import { Heading, ButtonWrapper, Button } from '../styled-components/globalStyles';
import { projectImages } from '../projectImageContainer';

export const ProjectsComponent = ({ forwardedRef }) => {
	return (
		<Projects
			style={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeIn', duration: 0.5 }}
			ref={forwardedRef}
		>
			<Heading>Projects</Heading>
			<Project>
				<ProjectImagesWrapper>
					<WideProjectImage
						alt='Reactagram 1 Wide'
						srcSet={projectImages.wideReactagram1JPG}
						src={projectImages.wideReactagram1}
					/>
				</ProjectImagesWrapper>
				<ProjectTextWrapper>
					<ProjectSubheading>Reactagram</ProjectSubheading>
					<Description>
						Created with <ColorText>React, TypeScript, styled-components</ColorText> and{' '}
						<ColorText>Firebase</ColorText>, Reactagram is an Instagram clone featuring most of the
						core features of Instagram. Users create an account or login with Gmail. User
						interaction is saved on Cloud Firestore and dynamically loaded with the help of
						<ColorText> react-router.</ColorText>
						{'\n'}
						{'\n'}
						Implementing the interaction with <ColorText>Firebase</ColorText> was undoubtedly one of
						the biggest challenges of this project. I also had a tough time with the dynamic routing
						for user profiles, but with some grit and perseverance, I overcame these challenges.
					</Description>
					<ButtonWrapper>
						<Button onClick={() => window.open('https://reactagram-zain.web.app/')}>
							VIEW SITE
						</Button>
						<Button onClick={() => window.open('https://github.com/zainthedev/reactagram')}>
							SOURCE CODE
						</Button>
					</ButtonWrapper>
				</ProjectTextWrapper>
			</Project>
			<Project>
				<ProjectImagesWrapper>
					<WideProjectImage
						alt='Waldo 1 Wide'
						srcSet={projectImages.wideWaldo1JPG}
						src={projectImages.wideWaldo1}
					/>
				</ProjectImagesWrapper>
				<ProjectTextWrapper>
					<ProjectSubheading>Waldo (A Photo Tagging App)</ProjectSubheading>
					<Description>
						Created with <ColorText>React, TypeScript, styled-components</ColorText> and{' '}
						<ColorText>Firebase</ColorText>, Waldo is a photo-tagging game to find and tag 3
						characters. Users can save their scores and name to Firebase and view the top 10 fastest
						players.
						{'\n'}
						{'\n'}
						As this was my first time working with <ColorText>TypeScript</ColorText> and
						<ColorText> styled-components</ColorText>, it took a great deal of trial and error and
						study of the documentation. I came to love the language and found great value in its
						strong typing.
					</Description>
					<ButtonWrapper>
						<Button onClick={() => window.open('https://zainthedev.github.io/waldo/')}>
							VIEW SITE
						</Button>
						<Button onClick={() => window.open('https://github.com/zainthedev/waldo')}>
							SOURCE CODE
						</Button>
					</ButtonWrapper>
				</ProjectTextWrapper>
			</Project>
			<Project>
				<ProjectImagesWrapper>
					<WideProjectImage
						alt='Battleship 2 Wide'
						srcSet={projectImages.wideBattleship2JPG}
						src={projectImages.wideBattleship2}
					/>
				</ProjectImagesWrapper>
				<ProjectTextWrapper>
					<ProjectSubheading>Battleship</ProjectSubheading>
					<Description>
						A test-driven incarnation of the classic game of Battleship created with{' '}
						<ColorText>React</ColorText> and tested with <ColorText>Jest.</ColorText>Users place
						their ships and battle against the animated cat pirate. All user interaction was tested
						with <ColorText>Jest.</ColorText> Animations and art created by myself.
						{'\n'}
						{'\n'}
						Putting together the game logic with extensive use of <ColorText>React</ColorText> hooks
						and state proved difficult. I solved this by focusing on keeping state as simple as
						possible, holding only the data needed to render the game.
					</Description>
					<ButtonWrapper>
						<Button onClick={() => window.open('https://zainthedev.github.io/battleship/')}>
							VIEW SITE
						</Button>
						<Button onClick={() => window.open('https://github.com/zainthedev/battleship')}>
							SOURCE CODE
						</Button>
					</ButtonWrapper>
				</ProjectTextWrapper>
			</Project>
			<Project>
				<ProjectImagesWrapper>
					<WideProjectImage
						alt='Weather 1 Wide'
						srcSet={projectImages.wideWeather1JPG}
						src={projectImages.wideWeather1}
					/>
				</ProjectImagesWrapper>
				<ProjectTextWrapper>
					<ProjectSubheading>Weather</ProjectSubheading>
					<Description>
						A weather app created with <ColorText>React</ColorText> and the{' '}
						<ColorText>OpenWeather API.</ColorText> Users can allow access to their location or
						search by city to get the current weather and an 8-day forecast.
						{'\n'}
						{'\n'}
						Implementing the fetching and displaying of data from the{' '}
						<ColorText>OpenWeather API</ColorText> was confusing at first. In retrospect, it's
						simple, but required a fair bit of study at the time. The styling of the carousel for
						the 8-day forecast also took some trial and error.
					</Description>
					<ButtonWrapper>
						<Button onClick={() => window.open('https://zainthedev.github.io/weather-app/')}>
							VIEW SITE
						</Button>
						<Button onClick={() => window.open('https://github.com/zainthedev/weather-app')}>
							SOURCE CODE
						</Button>
					</ButtonWrapper>
				</ProjectTextWrapper>
			</Project>
		</Projects>
	);
};
