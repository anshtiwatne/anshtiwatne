'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	return (
		mounted && (
			<button
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			>
				{theme === 'dark' ? '☀️' : '🌙'}
			</button>
		)
	)
}
