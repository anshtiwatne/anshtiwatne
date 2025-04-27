import Link from 'next/link'

export default function CowSay() {
	return (
		<pre className="text-left" style={{ fontFamily: 'monospace' }}>
			{`
 ______________
< `}
			{
				<Link
					href="https://github.com/anshtiwatne/anshtiwatne/blob/main/lib/profile-data.yml"
					className="text-blue-600 underline-offset-2 hover:underline"
				>
					Open in YAML
				</Link>
			}
			{` >
 --------------
        \\   ^__^
         \\  (oo)\_______
            (__)\       )\/\\
                ||----w |
                ||     ||`}
		</pre>
	)
}
