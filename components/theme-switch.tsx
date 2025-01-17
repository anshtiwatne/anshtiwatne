import { useTheme } from 'next-themes'

export function ThemeSwitch() {
	const { theme, setTheme } = useTheme()

	return (
		<button
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{theme === 'dark' ? "☀️" : "🌙"}
		</button>
	)
}
