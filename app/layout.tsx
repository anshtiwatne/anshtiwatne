import '@/app/globals.css'
import type { Metadata } from 'next'
import { Mona_Sans } from 'next/font/google'
import { Providers } from '@/app/providers'

const monaSans = Mona_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Ansh Tiwatne',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html suppressHydrationWarning lang="en">
			<body
				className={`${monaSans.className} h-screen w-screen bg-background antialiased`}
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
		</html>
	)
}
