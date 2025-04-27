import Link from 'next/link'

export default function CowSay() {
	return (
		<pre className="text-left" style={{ fontFamily: 'monospace' }}>
			{`
 ______________
< `}
			{
				<Link href="https://raw.githubusercontent.com/anshtiwatne/anshtiwatne/refs/heads/main/lib/profile-data.yml" className='text-blue-600 hover:underline underline-offset-2'>
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
