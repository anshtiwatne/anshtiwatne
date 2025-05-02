import NextLink, { type LinkProps as NextLinkProps } from 'next/link'

interface CustomLinkProps {
	color?: 'primary' | 'foreground'
	className?: string
	children?: React.ReactNode
	target?: string
}

type LinkProps = NextLinkProps & CustomLinkProps

export default function Link({
	color = 'primary',
	className,
	children,
	...rest
}: LinkProps) {
	const classList: string[] = []

	classList.push(
		'underline-offset-2',
		'hover:underline',
		'focus:outline-none',
		'focus:ring-2',
		'focus:ring-offset-1',
		'focus:ring-blue-500',
		'rounded-[2px]',
	)

	if (color === 'primary') {
		classList.push('text-[#0969DA]', 'dark:text-[#58A6FF]')
	}

	if (typeof className === 'string' && className.trim()) {
		classList.push(className)
	}

	const combinedClassName = classList.join(' ')

	return (
		<NextLink className={combinedClassName} {...rest}>
			{children}
		</NextLink>
	)
}
