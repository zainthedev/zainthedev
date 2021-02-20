import Particles from 'react-tsparticles';

export const ParticlesComponent = () => {
	return (
		<Particles
			id='tsparticles'
			options={{
				background: {
					color: {
						value: '#2c363f',
					},
				},
				fpsLimit: 60,
				interactivity: {
					detectsOn: 'window',
					events: {
						onClick: {
							enable: true,
							mode: 'push',
						},
						onHover: {
							enable: true,
							mode: '',
						},
						resize: true,
					},
					modes: {
						bubble: {
							distance: 400,
							duration: 2,
							opacity: 0.8,
							size: 40,
						},
						push: {
							quantity: 4,
						},
						repulse: {
							distance: 100,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: '#E1CE7A',
					},
					links: {
						color: '#ffffff',
						distance: 100,
						enable: false,
						opacity: 0.5,
						width: 1,
					},
					collisions: {
						enable: true,
					},
					move: {
						direction: 'none',
						enable: true,
						outMode: 'bounce',
						random: false,
						speed: 1,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							value_area: 1000,
						},
						value: 80,
					},
					opacity: {
						value: 0.5,
					},
					shape: {
						type: 'star',
					},
					size: {
						random: true,
						value: 5,
					},
				},
				detectRetina: true,
			}}
		/>
	);
};
