import '@/app/globals.css'
import type { Metadata } from 'next'
import { Mona_Sans } from 'next/font/google'
import { Providers } from '@/app/providers'

const monaSans = Mona_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Ansh Tiwatne',
}

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'ProfilePage',
	mainEntity: {
		'@type': 'Person',
		name: 'Ansh Tiwatne',
		alternateName: 'Ansh Shekhar Tiwatne',
		givenName: 'Ansh',
		familyName: 'Tiwatne',
		email: 'ansh.tiwatne@gmail.com',
		birthDate: '2006-12-25',
		knowsLanguage: ['English', 'Hindi', 'Marathi'],
		gender: 'Male',
		url: 'https://ansht.com',
		image: 'https://ansht.com/avatar.webp',
		description:
			'Ansh Tiwatne is a high school student at DLRC. He is currently working at Inspirit Vision as a Software Developer',
		sameAs: [
			'https://github.com/anshtiwatne',
			'https://x.com/anshtiwatne',
			'https://www.linkedin.com/in/ansht',
			'https://www.instagram.com/anshtiwatne',
			'https://www.youtube.com/@anshtiwatne',
			'https://www.facebook.com/anshtiwatne',
			'https://ansht.com',
		],
		jobTitle: 'Software Developer',
		worksFor: {
			'@type': 'Organization',
			name: 'Inspirit Vision',
		},
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html suppressHydrationWarning lang="en">
			<body
				className={`${monaSans.className} w-screen bg-background antialiased dark:bg-[#1A1B1E]`}
			>
				<Providers
					themeProps={{
						attribute: 'class',
						defaultTheme: 'light',
						// children: children,
					}}
				>
					{children}
				</Providers>
			</body>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
		</html>
	)
}
