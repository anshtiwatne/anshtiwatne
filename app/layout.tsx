import '@/app/globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Mona_Sans } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import personSchema from '@/data/person-schema.json'

const monaSans = Mona_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	metadataBase: new URL('https://ansht.com'),
	title: 'Ansh Tiwatne',
	description: 'Portfolio of Ansh Tiwatne',
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
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(personSchema),
				}}
			/>
		</html>
	)
}
