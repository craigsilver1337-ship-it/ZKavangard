/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: ['class', 'class'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'-apple-system',
					'BlinkMacSystemFont',
					'SF Pro Display',
					'SF Pro Text',
					'system-ui',
					'sans-serif'
				]
			},
			colors: {
				ios: {
					blue: '#007AFF',
					green: '#34C759',
					orange: '#FF9500',
					red: '#FF3B30',
					gray: '#8E8E93',
					gray2: '#AEAEB2',
					gray3: '#C7C7CC',
					gray4: '#D1D1D6',
					gray5: '#E5E5EA',
					gray6: '#F2F2F7'
				},
				label: {
					primary: '#1D1D1F',
					secondary: '#424245',
					tertiary: '#6E6E73',
					quaternary: '#86868B'
				},
				'system-bg': {
					primary: '#FFFFFF',
					secondary: '#F5F5F7',
					tertiary: '#FAFAFA',
					grouped: '#F2F2F7'
				},
				separator: {
					opaque: '#C6C6C8',
					nonOpaque: 'rgba(60, 60, 67, 0.29)'
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			spacing: {
				'11': '44px',
				'15': '60px',
				'18': '72px',
				'4.5': '18px',
				'5.5': '22px'
			},
			fontSize: {
				'large-title': [
					'34px',
					{
						lineHeight: '41px',
						letterSpacing: '0.37px',
						fontWeight: '700'
					}
				],
				'title-1': [
					'28px',
					{
						lineHeight: '34px',
						letterSpacing: '0.36px',
						fontWeight: '700'
					}
				],
				'title-2': [
					'22px',
					{
						lineHeight: '28px',
						letterSpacing: '0.35px',
						fontWeight: '700'
					}
				],
				'title-3': [
					'20px',
					{
						lineHeight: '25px',
						letterSpacing: '0.38px',
						fontWeight: '600'
					}
				],
				headline: [
					'17px',
					{
						lineHeight: '22px',
						letterSpacing: '-0.41px',
						fontWeight: '600'
					}
				],
				body: [
					'17px',
					{
						lineHeight: '22px',
						letterSpacing: '-0.41px',
						fontWeight: '400'
					}
				],
				callout: [
					'16px',
					{
						lineHeight: '21px',
						letterSpacing: '-0.32px',
						fontWeight: '400'
					}
				],
				subheadline: [
					'15px',
					{
						lineHeight: '20px',
						letterSpacing: '-0.24px',
						fontWeight: '400'
					}
				],
				footnote: [
					'13px',
					{
						lineHeight: '18px',
						letterSpacing: '-0.08px',
						fontWeight: '400'
					}
				],
				'caption-1': [
					'12px',
					{
						lineHeight: '16px',
						letterSpacing: '0px',
						fontWeight: '400'
					}
				],
				'caption-2': [
					'11px',
					{
						lineHeight: '13px',
						letterSpacing: '0.06px',
						fontWeight: '400'
					}
				]
			},
			borderRadius: {
				ios: '10px',
				'ios-lg': '12px',
				'ios-xl': '16px',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'ios-1': '0 1px 3px rgba(0, 0, 0, 0.04)',
				'ios-2': '0 4px 12px rgba(0, 0, 0, 0.08)',
				'ios-3': '0 8px 24px rgba(0, 0, 0, 0.12)'
			},
			animation: {
				'fade-in': 'fadeIn 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				shimmer: 'shimmer 2s infinite linear',
				loading: 'loading 2s ease-in-out infinite'
			},
			keyframes: {
				fadeIn: {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				shimmer: {
					'0%': {
						backgroundPosition: '-1000px 0'
					},
					'100%': {
						backgroundPosition: '1000px 0'
					}
				},
				loading: {
					'0%': {
						width: '30%'
					},
					'50%': {
						width: '70%'
					},
					'100%': {
						width: '30%'
					}
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
