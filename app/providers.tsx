'use client'

import * as React from 'react'
import { HeroUIProvider } from "@heroui/system"
import { useRouter } from 'next/navigation'
import { ThemeProvider } from 'next-themes'

export interface ProvidersProps {
	children: React.ReactNode
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	themeProps?: any
}

export function Providers({ children, themeProps }: ProvidersProps) {
	const router = useRouter()

	return (
		<HeroUIProvider navigate={router.push}>
			<ThemeProvider {...themeProps}>{children}</ThemeProvider>
		</HeroUIProvider>
	)
}
