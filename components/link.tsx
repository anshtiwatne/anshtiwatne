import NextLink from 'next/link'

export default function Link({
	href,
	target,
	color,
	className,
	children,
}: {
	href: string
	target?: string
	color?: string
	className?: string
	children: React.ReactNode
}) {
	return (
		<NextLink
			className={`${color === 'foreground' ? '' : 'text-[#0969DA] dark:text-[#58A6FF]'} ${className} underline-offset-2 hover:underline`}
			href={href}
			target={target}
		>
			{children}
		</NextLink>
	)
}
