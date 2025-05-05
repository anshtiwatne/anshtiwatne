import Link from '@/components/link'

export default function CowSay({ text, link }: { text: string; link: string }) {
	return (
		<pre
			className="pt-4 text-left leading-tight tracking-normal"
			style={{ fontFamily: 'monospace' }}
		>
			{` ${'_'.repeat(text.length + 2)}
< `}
			{
				<Link href={link} target="_blank">
					{text}
				</Link>
			}
			{` >
 ${'-'.repeat(text.length + 2)}
        \\   ^__^
         \\  (oo)\_______
            (__)\       )\/\\
                ||----w |
                ||     ||`}
		</pre>
	)
}
