import Link from '@/components/link'

export default function CowSay() {
	return (
		<pre className="pt-4 text-left" style={{ fontFamily: 'monospace' }}>
			{` ______________
< `}
			{
				<Link
					href="https://github.com/anshtiwatne/anshtiwatne/blob/main/lib/profile-data.yml"
					target="_blank"
				>
					View as YAML
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
