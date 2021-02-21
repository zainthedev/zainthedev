import {
	Projects,
	Project,
	ProjectImagesWrapper,
	ProjectImage,
	ProjectTextWrapper,
	ColorText,
	FeaturesText,
} from '../styled-components/projectsStyles';
import { Description } from '../styled-components/aboutStyles';
import { Heading, Subheading, ButtonWrapper, Button } from '../styled-components/globalStyles';
import reactagram1 from '../images/reactagram1.webp';
import reactagram2 from '../images/reactagram2.webp';
import waldo1 from '../images/waldo1.webp';
import waldo2 from '../images/waldo2.webp';
import battleship1 from '../images/battleship1.webp';
import battleship2 from '../images/battleship2.webp';
import weather1 from '../images/weather1.webp';
import weather2 from '../images/weather2.webp';

export const ProjectsComponent = ({ forwardedRef }) => {
	return (
		<Projects animate='visible' ref={forwardedRef}>
			<Heading>Projects</Heading>
			<Subheading style={{ paddingTop: '10px' }}>
				Click an image to be taken to the live version of the site
			</Subheading>
			<Project>
				<ProjectImagesWrapper>
					<ProjectImage
						onClick={() => window.open('https://reactagram-zain.web.app/')}
						alt='Reactagram 1'
						src={reactagram1}
					/>
					<ProjectImage
						onClick={() => window.open('https://reactagram-zain.web.app/')}
						alt='Reactagram 2'
						src={reactagram2}
					/>
				</ProjectImagesWrapper>
				<ProjectTextWrapper>
					<Subheading>Reactagram</Subheading>
					<Description>
						Created with <ColorText>React, TypeScript</ColorText> and{' '}
						<ColorText>Firebase</ColorText>, Reactagram is an Instagram clone featuring most of the
						core features of Instagram.
						{'\n'}
						{'\n'}
						<FeaturesText>Features:</FeaturesText>
						{'\n'}• Login with Gmail or create your own account
						{'\n'}• Crop and upload images to your profile with captions, tags and a location
						{'\n'}• View user profiles with dynamic routing
						{'\n'}• Search for, follow and tag other users in your posts
						{'\n'}• Comment on and Like other users' posts
						{'\n'}• View the posts of the users you follow on the home page
						{'\n'}• View the explore page to view all posts on to Reactagram
						{'\n'}• Receive notifications upon user interaction
						{'\n'}
						{'\n'}
						Hammering down the functionality and interaction with Firebase was undoubtedly one of
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
					<ProjectImage
						onClick={() => window.open('https://zainthedev.github.io/waldo/')}
						alt='Waldo 1'
						src={waldo1}
					/>
					<ProjectImage
						onClick={() => window.open('https://zainthedev.github.io/waldo/')}
						alt='Waldo 2'
						src={waldo2}
					/>
				</ProjectImagesWrapper>
				<ProjectTextWrapper>
					<Subheading>Waldo (A Photo Tagging App)</Subheading>
					<Description>
						Created with <ColorText>React, TypeScript</ColorText> and{' '}
						<ColorText>Firebase</ColorText>, Waldo is a photo-tagging race against the clock to find
						and tag 3 characters.
						{'\n'}
						{'\n'}
						<FeaturesText>Features:</FeaturesText>
						{'\n'}• Click and create tags on characters
						{'\n'}• Enter your name to record and compare your score to other players on the
						scoreboard
						{'\n'}
						{'\n'}
						As this was my first time using TypeScript, it was rather daunting at first. However,
						after a day or two, I grew to enjoy it and now feel comfortable with it.
						{'\n'}
						Figuring out how to account for mouseclick position with different screen widths was
						unexpectedly challenging, but was quickly solved with some Google-fu and simple math.
						{'\n'}
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
					<ProjectImage
						onClick={() => window.open('https://zainthedev.github.io/battleship/')}
						alt='Battleship 1'
						src={battleship1}
					/>
					<ProjectImage
						onClick={() => window.open('https://zainthedev.github.io/battleship/')}
						alt='Battleship 2'
						src={battleship2}
					/>
				</ProjectImagesWrapper>
				<ProjectTextWrapper>
					<Subheading>Battleship</Subheading>
					<Description>
						A test-driven incarnation of Battleship created with <ColorText>React</ColorText> and
						tested with <ColorText>Jest</ColorText>.{'\n'}
						{'\n'}
						<FeaturesText>Features:</FeaturesText>
						{'\n'}• Place your ships exactly as you'd like before the game starts
						{'\n'}• Battle against the animated cat pirate - find and sink his ships before he sinks
						yours
						{'\n'}
						{'\n'}
						This project allowed me to flex my creative muscles in creating an animated AI to fight
						against. All animations and art were created by myself.
						{'\n'}
						Putting together the game logic with extensive use of React hooks and state proved
						difficult. I solved this by focusing on keeping state as simple as possible, holding
						only the data needed to render the game.
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
					<ProjectImage
						onClick={() => window.open('https://zainthedev.github.io/weather-app/')}
						alt='Weather 1'
						src={weather1}
					/>
					<ProjectImage
						onClick={() => window.open('https://zainthedev.github.io/weather-app/')}
						alt='Weather 1'
						src={weather2}
					/>
				</ProjectImagesWrapper>
				<ProjectTextWrapper>
					<Subheading>Weather</Subheading>
					<Description>
						A weather app created with <ColorText>React</ColorText> and the{' '}
						<ColorText>OpenWeather API</ColorText>.{'\n'}
						{'\n'}
						<FeaturesText>Features:</FeaturesText>
						{'\n'}• View current weather and an 8-day forecast
						{'\n'}• Allow access to your location to get the weather data for your area
						{'\n'}• Search by city to get weather data from around the world
						{'\n'}
						{'\n'}
						This project was my first experience with asynchronous JavaScript. It was a valuable
						learning experience, and felt like the first glimpse of the limitless potential of web
						development.
						{'\n'}
						Implementing the fetching and displaying of data from the{' '}
						<ColorText>OpenWeather API</ColorText> was confusing at first. In retrospect, it's
						rather simple to do, but required a fair bit of study at the time. The styling of the
						carousel for the 8-day forecast also took some trial and error.
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
