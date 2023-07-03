module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		fontFamily: {
			'gravity-bold': ['Gravity-Bold'],
			'gravity-regular': ['Gravity-Regular'],
			'gravity-light': ['Gravity-Light'],
			'gravity-book': ['Gravity-Book'],
			'prilly-monly': ['prilly-monly'],
			aventi: ['Aventi', 'sans-serif'],
			satoshi: ['Satoshi', 'sans-serif'],
		},
		letterSpacing: {
			tightest: '-.075em',
			tighter: '-.05em',
			tight: '-.025em',
			normal: '0',
			wide: '.025em',
			wider: '.05em',
			widest: '.1em',
			widestx: '.25em',
		},
		container: {
			padding: {
				DEFAULT: '15px',
			},
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '960px',
			xl: '1200px',
		},
		extend: {
			colors: {
				primary: '#0a0a0a',
				accent: '#B809C3',
				danger: '#B92929',
				base: '#EAE7DE',
				'base-light': '#F5F2E9',
				'base-dark': '#130c06',
			},
			backgroundImage: {
				'header-gradient':
					'linear-gradient(90deg, rgba(0,0,102,1) 20%, rgba(52,22,71,1) 52%, rgba(24,0,64,1) 97%)',
				coffeTime: "url('/images/coffetime.jpg')",
				artBoard: "url('/images/Artboard.png')",
			},
			keyframes: {
				rotate: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(-360deg)' },
				},
				rotateReverse: {
					'0%': { transform: 'rotate(360deg)' },
					'100%': { transform: 'rotate(0deg)' },
				},
				circleRotate: {
					'0%': { transform: 'translate(-50%, -50%) rotate(45deg)' },
					'100%': { transform: 'translate(-50%, -50%) rotate(405deg)' },
				},
				circleRotateReverse: {
					'0%': { transform: 'translate(-50%, -50%) rotate(-45deg)' },
					'100%': { transform: 'translate(-50%, -50%) rotate(-405deg)' },
				},
				imgRotate: {
					'100%': { transform: 'rotate(-45deg)' },
					'0%': { transform: 'rotate(-405deg)' },
				},
				fillBar: {
					'0%': { transform: 'scaleX(1)' },
				},
			},
			animation: {
				spin: 'rotate 20s linear infinite',
				spinReverse: 'rotateReverse 20s linear infinite',
				spinCircle: 'circleRotate 20s linear infinite',
				spinCircleReverse: 'circleRotateReverse 20s linear infinite',
				spinRotateImg: 'imgRotate 20s linear infinite',
				skillBar: 'fillBar 5s forwards',
			},
		},
	},
	plugins: [],
};
