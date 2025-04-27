import Link from '@/components/link'

export default function CowSay() {
	return (
		<pre className="text-left" style={{ fontFamily: 'monospace' }}>
			{`
 ___________
< `}
			{
				<Link
					href="https://github.com/anshtiwatne/anshtiwatne/blob/main/lib/profile-data.yml"
					target="_blank"
				>
					View YAML
				</Link>
			}
			{` >
 -----------
        \\   ^__^
         \\  (oo)\_______
            (__)\       )\/\\
                ||----w |
                ||     ||`}
		</pre>
	)
}
