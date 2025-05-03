import '@/app/globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Mona_Sans } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

const monaSans = Mona_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	metadataBase: new URL('https://ansht.com'),
	title: 'Ansh Tiwatne',
	description: 'Portfolio of Ansh Tiwatne',
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
		image: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Ansh_Tiwatne_LGP.jpg',
		description:
			'Ansh Tiwatne is a Software Developer at Inspirit Vision and a DLRC Alumnus. He primarily works with Python, TypeScript, and React, specializing in web development.',

		sameAs: [
			'https://github.com/anshtiwatne',
			'https://x.com/anshtiwatne',
			'https://www.linkedin.com/in/ansht',
			'https://www.instagram.com/anshtiwatne',
			'https://www.youtube.com/@anshtiwatne',
			'https://www.facebook.com/anshtiwatne',
			'https://ansht.com',
			'https://www.wikidata.org/wiki/Q133865037',
			'https://commons.wikimedia.org/wiki/Category:Ansh_Tiwatne',
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
				className={`${monaSans.className} bg-white antialiased dark:bg-[#1A1B1E]`}
			>
				<ThemeProvider attribute="class">{children}</ThemeProvider>
			</body>
			<Script
				id="JSON-LD"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
		</html>
	)
}
