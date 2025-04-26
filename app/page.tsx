/* eslint-disable react/no-unescaped-entities */
'use client'

import NextLink from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faArrowUpRightFromSquare,
	faEnvelope,
	faGlobe,
} from '@fortawesome/free-solid-svg-icons'
import {
	faGithub,
	faLinkedin,
	faXTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import ThemeSwitch from '@/components/theme-switch'

const isResume = false

function Link({
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
			className={
				color === 'foreground'
					? className
					: `text-blue-600 ${className}`
			}
			href={href}
			target={target}
		>
			{children}
		</NextLink>
	)
}

function Header() {
	return isResume ? (
		<header className="flex items-center justify-between text-lg text-[#52525B] dark:text-[#D4D4D8]">
			<Link color="foreground" href="mailto:hello@ansht.com">
				<span className="text-[#52525B] dark:text-[#D4D4D8]">
					📧 hello@ansht.com
				</span>
			</Link>
			<Link color="foreground" href="tel:+919075055300">
				<span className="text-[#52525B] dark:text-[#D4D4D8]">
					📞 +91 9075055300
				</span>
			</Link>
		</header>
	) : (
		<header className="flex items-center justify-between text-lg text-[#52525B] dark:text-[#D4D4D8]">
			<p itemScope itemProp="name" className="font-bold tracking-wide">
				ANSH TIWATNE
			</p>
			<div className="flex items-center gap-2 font-medium">
				<Link color="foreground" href="https://github.com/anshtiwatne">
					<span className="text-[#52525B] dark:text-[#D4D4D8]">
						🔗 GitHub
					</span>
				</Link>
				|
				<ThemeSwitch />
			</div>
		</header>
	)
}

function Footer() {
	const profiles = [
		{ link: 'https://github.com/anshtiwatne', icon: faGithub },
		{ link: 'https://www.linkedin.com/in/ansht', icon: faLinkedin },
		{ link: 'https://x.com/anshtiwatne', icon: faXTwitter },
		{ link: 'https://www.instagram.com/anshtiwatne', icon: faInstagram },
		{ link: 'mailto:ansh.tiwatne@gmail.com', icon: faEnvelope },
	]
	return (
		<footer className="flex items-center justify-between pt-10">
			<Link
				className="flex items-center gap-2 text-[#52525B] dark:text-[#D4D4D8]"
				color="foreground"
				href="https://ansht.com"
			>
				<FontAwesomeIcon icon={faGlobe} size="lg" />
				<span>ansht.com</span>
			</Link>
			<div className="flex items-center gap-4">
				{profiles.map((profile) => (
					<Link
						key={profile.link}
						className="text-[#52525B] dark:text-[#D4D4D8]"
						color="foreground"
						href={profile.link}
					>
						<FontAwesomeIcon icon={profile.icon} size="lg" />
					</Link>
				))}
			</div>
		</footer>
	)
}

function Section({
	title,
	children,
}: {
	title: string
	children: React.ReactNode
}) {
	return (
		<div className="flex flex-col gap-2">
			<p className="ml-[-0.25rem] text-lg font-bold">{title}</p>
			<div className="flex flex-col gap-2">{children}</div>
		</div>
	)
}

export default function Home() {
	return (
		<main className="mx-auto flex max-w-3xl flex-col gap-8 p-4 tracking-wide text-[#27272A] dark:text-[#F4F4F5]">
			<Header />

			<p className="mb-[-1rem] pt-4 text-4xl font-bold">
				{isResume ? 'Ansh Tiwatne' : "👋 Hi, I'm Ansh"}
			</p>
			<p itemScope itemProp="desc">
				Software Developer at{' '}
				<Link href="https://inspiritvision.com">Inspirit Vision</Link>{' '}
				and <Link href="https://dlrc.in">DLRC</Link> Alumnus. I
				primarily work with Python, TypeScript, and React, specializing
				in web development.
			</p>

			<Section title="⚒️ PROJECTS">
				<p>
					I'm constantly working on new projects which are usually
					open-sourced on{' '}
					<Link href="https://github.com/anshtiwatne">GitHub</Link>
					—here are a few favorites:
				</p>
				<ul className="flex list-disc flex-col gap-2 pl-4">
					<li>
						<Link
							href="https://daily.dlrc.in"
							className="font-semibold"
						>
							DLRC Daily
						</Link>{' '}
						— A short form news app (like Inshorts) developed for my
						school community, built in Next.js with a Firebase
						backend.
					</li>
					<li>
						<Link
							href="https://play.google.com/store/apps/details?id=com.inspiritvision.pranadaan.twa"
							className="font-semibold"
						>
							Prana Daan
						</Link>{' '}
						— React app for managing registrations and automating
						processes for semiannual blood donation drives at
						Inspirit Vision.
					</li>
					<li>
						<Link
							href="https://play.google.com/store/apps/details?id=in.chalodaudne.twa"
							className="font-semibold"
						>
							Chalo Daudne
						</Link>{' '}
						— React app for tracking runners, generating
						certificates and managing volunteers during biannual
						community marathons at Inspirit Vision.
					</li>
					<li>
						<Link
							href="https://weather.dlrc.in"
							className="font-semibold"
						>
							DLRC Weather
						</Link>{' '}
						— A Raspberry Pi weather station installed in my school
						that records and displays real-time weather data on a
						website.
					</li>
					<li>
						<Link
							href="https://ansht.stck.me/post/16674/Hello-Wordle"
							className="font-semibold"
						>
							Wordle Solver
						</Link>{' '}
						— An efficient Wordle solving algorithm and scraper
						written in Python using Playwright, as a learning
						project.
					</li>
					<li>
						<Link
							href="https://notes.ansht.com"
							className="font-semibold"
						>
							AS & A Notes
						</Link>{' '}
						— Compilation of AS & A level revision notes and
						resources in markdown (now hosted on Notion), popular
						among my peers.
					</li>
				</ul>
			</Section>

			<Section title="👨‍💻 WORK EXPERIENCE">
				<ul className="flex list-disc flex-col gap-2 pl-4">
					<li>
						<div className="flex items-center justify-between font-semibold">
							<span>
								Software Developer @{' '}
								<Link href="https://inspiritvision.com">
									Inspirit Vision LLP
								</Link>
							</span>
							<span>Oct 2023 - present</span>
						</div>
						<p>
							Developing{' '}
							<Link href="https://play.google.com/store/apps/dev?id=7219571418619438815">
								apps
							</Link>{' '}
							to advance CSR initiatives and automate processes
							for hundreds of users during company-wide events.
						</p>
						<Link
							className="font-medium"
							href="https://drive.google.com/file/d/1q3bz5p1evIOMchaBrveo0v6lRMH4r2ej"
							target="_blank"
						>
							Project Certificate{' '}
							<FontAwesomeIcon
								className="ml-1"
								icon={faArrowUpRightFromSquare}
								size="xs"
							/>
						</Link>
					</li>
					<li>
						<div className="flex items-center justify-between font-semibold">
							<span>
								Tech Intern @{' '}
								<Link href="https://1point01.com">
									1point01
								</Link>
							</span>
							<span>Apr 2022 - Jun 2022</span>
						</div>
						<p>
							Involved creating a pamphlet program for NGOs to
							communicate their objectives better and developed a
							Jekyll website, serving as an NGO directory.
						</p>
						<Link
							className="font-medium"
							href="https://drive.google.com/file/d/1D7jHguOCFYTmwKFYlaNIDLzQP9o30UFZ"
							target="_blank"
						>
							Certificate of Internship{' '}
							<FontAwesomeIcon
								className="ml-1"
								icon={faArrowUpRightFromSquare}
								size="xs"
							/>
						</Link>
					</li>
					<li>
						<div className="flex items-center justify-between font-semibold">
							<span>
								Tech Intern @{' '}
								<Link href="https://www.weshinetech.in">
									WeShineTech
								</Link>
							</span>
							<span>May 2020 - Jun 2020</span>
						</div>
						<p>
							Provided chat support. Created a video tutorials.
							Improved social media presence. Made minor
							improvements to their website.
						</p>
						<Link
							className="font-medium"
							href="https://drive.google.com/file/d/1FKjtMmf1Aa3tDs8Ffqt41wXlkEHkc8Ma"
							target="_blank"
						>
							Internship Letter{' '}
							<FontAwesomeIcon
								className="ml-1"
								icon={faArrowUpRightFromSquare}
								size="xs"
							/>
						</Link>
					</li>
				</ul>
			</Section>

			<Section title="💼 INTERNSHIPS">
				<ul className="flex list-disc flex-col gap-2 pl-4">
					<li>
						<div className="flex items-center justify-between font-semibold">
							<span>
								App Developer & Editor @{' '}
								<Link href="https://dlrc.in">
									DLRC News Network
								</Link>
							</span>
							<span>Jun 2022 - Dec 2024</span>
						</div>
						<p>
							Developed and published the{' '}
							<Link href="https://play.google.com/store/apps/details?id=in.dlrc.daily.twa">
								DLRC Daily app
							</Link>{' '}
							as a platform for sharing short-form news and
							updates across our school community, bringing it
							closer together. Led a team of interns in publishing
							stories. Designed and helped compile our first
							school magazine.
						</p>
						<Link
							className="font-medium"
							href="https://drive.google.com/file/d/18c21FEawh8s9wqe26yYmFsn6TcXKtEqe"
							target="_blank"
						>
							Letter of Appreciation{' '}
							<FontAwesomeIcon
								className="ml-1"
								icon={faArrowUpRightFromSquare}
								size="xs"
							/>
						</Link>
					</li>
					<li>
						<div className="flex items-center justify-between font-semibold">
							<span>
								Physics Lab Intern @{' '}
								<Link href="https://dlrc.in">DLRC</Link>
							</span>
							<span>Aug 2022 - Mar 2024</span>
						</div>
						<p>
							Prepared experiment setups for high school lab
							sessions. Organized and maintained lab instruments.
							Assisted in teaching experimental Physics. Performed
							demonstrations for school fairs.
						</p>
						<Link
							className="font-medium"
							href="https://drive.google.com/file/d/1JX8jaBBAUGzmz_7KYx2WYwtAQ5KlpQls"
							target="_blank"
						>
							Letter of Appreciation{' '}
							<FontAwesomeIcon
								className="ml-1"
								icon={faArrowUpRightFromSquare}
								size="xs"
							/>
						</Link>
					</li>
					<li>
						<div className="flex items-center justify-between font-semibold">
							<span>
								Math & Science Learning Support Intern @{' '}
								<Link href="https://dlrc.in">DLRC</Link>
							</span>
							<span>Aug 2022 - Oct 2022</span>
						</div>
						<p>
							Helped students with doubts. Checked tests and
							homework. Planned experiments for middle school Math
							and science classes.
						</p>
						<Link
							className="font-medium"
							href="https://drive.google.com/file/d/1JX8jaBBAUGzmz_7KYx2WYwtAQ5KlpQls"
							target="_blank"
						>
							Letter of Appreciation{' '}
							<FontAwesomeIcon
								className="ml-1"
								icon={faArrowUpRightFromSquare}
								size="xs"
							/>
						</Link>
					</li>
				</ul>
			</Section>

			<div className="flex justify-between">
				<Section title="🖥️ LANGUAGES (computer)">
					<ul className="list-disc pl-4">
						<li>Python — advanced</li>
						<li>JavaScript — intermediate</li>
						<li>TypeScript — intermediate</li>
						<li>Bash — intermediate</li>
						<li>HTML & CSS + Tailwind — advanced</li>
						<li>SQL — beginner</li>
						<li>QBasic — intermediate</li>
						<li>Prolog — working knowledge</li>
						<li>x86 Assembly — working knowledge</li>
					</ul>
				</Section>
				<div className="flex flex-col gap-4">
					<Section title="🌐 LANGUAGES (human)">
						<ul className="list-disc pl-4">
							<li>English — native</li>
							<li>Marathi — native</li>
							<li>Hindi — proficient</li>
						</ul>
					</Section>
					<Section title="🤹 SKILLS">
						<ul className="list-disc pl-4">
							<li>React + Next.js</li>
							<li>Firebase</li>
							<li>Linux</li>
							<li>Git & GitHub</li>
						</ul>
					</Section>
				</div>
			</div>

			<Section title="🤝 COMMUNITY SERVICE">
				<ul className="flex list-disc flex-col gap-2 pl-4">
					<li>
						<div className="flex items-center justify-between font-semibold">
							<span>
								Volunteer/Mentor @{' '}
								<Link href="https://www.livingacademy.org">
									Living Academy
								</Link>
							</span>
							<span>Jun 2024 - present</span>
						</div>
						<p>
							Teaching basic programming and mentoring kids in
							under-resourced communities through hands-on STEM
							projects. Expanded Living Academy's reach to my
							school campus where I lead weekly two hour sessions
							with another volunteer.
						</p>
					</li>
					<li>
						<div className="flex items-center justify-between font-semibold">
							<span>
								Founded{' '}
								<Link href="https://sustainablesuds.ansht.com">
									Sustainable Suds
								</Link>
							</span>
							<span>Jul 2024 - present</span>
						</div>
						<p>
							Dissatisfied with amount of soap waste generated by
							hotels, founded a project to repurpose it. Partnered
							with four hotels and led two high school students
							that joined the initiative. Raised money selling
							soap for{' '}
							<Link href="https://www.instagram.com/samajbandh.india/">
								Samajbandh India
							</Link>
						</p>
					</li>
					<li>
						<div className="flex items-center justify-between font-semibold">
							<span>Volunteer @ DLRC-DSS Program</span>
							<span>Feb 2022 - Apr 2022</span>
						</div>
						<p>
							Taught NCERT science syllabus online to a batch of
							10+ middle school students weekly during government
							school closures. Planned and guided them through
							several at-home science experiments to keep students
							engaged through the lockdown.
						</p>
					</li>
				</ul>
			</Section>

			<Section title="📝 EDUCATION & TESTING">
				<div className="flex justify-between">
					<div>
						<p className="font-semibold">IGCSE: 2023</p>
						<ul className="list-disc pl-4">
							<li>Physics: A*</li>
							<li>Mathematics: A*</li>
							<li>Chemistry: A*</li>
							<li>Geography: A*</li>
							<li>
								Eng 2<sup>nd</sup> Lang: A*
							</li>
						</ul>
					</div>
					<div>
						<p className="font-semibold">AS Levels: 2024</p>
						<ul className="list-disc pl-4">
							<li>Physics: A</li>
							<li>Mathematics: A</li>
							<li>Computer Science: A</li>
							<li>Computer Science: A</li>
							<li>General English: IP</li>
						</ul>
					</div>
					<div>
						<p className="font-semibold">A Levels: 2025</p>
						<ul className="list-disc pl-4">
							<li>Physics: IP</li>
							<li>Mathematics: IP</li>
							<li>Computer Science: A*</li>
						</ul>
					</div>
				</div>
				<div className="flex justify-between pt-1">
					<span>
						<span className="font-semibold">SAT</span> (superscore):
						1530/1600
					</span>
					<span>Reading & Writing: 740, Math: 790</span>
				</div>
				<div>
					<span className="font-semibold">IELTS</span>: overall band
					score 8
				</div>
			</Section>

			<Section title="🌞 SUMMER PROGRAMS">
				<ul className="flex list-disc flex-col gap-2 pl-4">
					<li>
						<div className="flex items-center justify-between font-semibold">
							<Link href="https://www.lodhageniusprogramme.com">
								Lodha Genius Programme
							</Link>
							<span>May 2023 - Jun 2023</span>
						</div>
						<p>
							Admitted as one of 100 students across India into a
							fully funded month-long residential STEM program at{' '}
							<Link href="https://www.ashoka.edu.in">
								Ashoka University
							</Link>
							. Studied math (number theory, geometry and
							combinatorics), astronomy and microscopy. Conducted
							two programming lessons (at microscopy professor's
							invitation). Made significant contributions and
							guided my teams in final science projects.
						</p>
						<div className="flex items-center gap-4">
							<Link
								className="font-medium"
								href="https://drive.google.com/file/d/19BQsXb7ijZcNXOXd_IO9j_yeFDBLmSJq"
								target="_blank"
							>
								Certificate{' '}
								<FontAwesomeIcon
									className="ml-1"
									icon={faArrowUpRightFromSquare}
									size="xs"
								/>
							</Link>
							<Link
								className="font-medium"
								href="https://www.instagram.com/p/CyBF2m6JXsf"
								target="_blank"
							>
								Post{' '}
								<FontAwesomeIcon
									className="ml-1"
									icon={faArrowUpRightFromSquare}
									size="xs"
								/>
							</Link>
						</div>
					</li>
				</ul>
				<ul className="flex list-disc flex-col gap-2 pl-4">
					<li>
						<div className="flex items-center justify-between font-semibold">
							Light Touch Programme
							<span>Jul 2023 - Apr 2024</span>
						</div>
						<p>
							Online extension of the Lodha Genius Programme.
							Continued study of advanced math, astronomy,
							microscopy and picked up an additional quantitative
							biology module.
						</p>
					</li>
				</ul>
			</Section>

			<Section title="📚 ONLINE COURSES">
				<ul className="list-disc pl-4">
					<li>HarvardX: CS50's Introduction to Computer Science</li>
					<li>
						<Link href="https://www.coursera.org/account/accomplishments/specialization/certificate/WEV3PB2VGNNR">
							Google IT Support Professional Certificate
						</Link>
					</li>
					<li>
						<Link href="https://www.coursera.org/account/accomplishments/specialization/certificate/WEV3PB2VGNNR">
							System Administration and IT Infrastructure Services
						</Link>
					</li>
					<li>
						<Link href="https://www.coursera.org/account/accomplishments/certificate/TVZK74AUUDRF">
							Crash Course on Python
						</Link>
					</li>
					<li>
						<Link href="https://www.coursera.org/account/accomplishments/certificate/TG3RKKWDFF28">
							Using Python to Interact with the Operating System
						</Link>
					</li>
					<li>
						<Link href="https://www.coursera.org/account/accomplishments/specialization/certificate/6T9A9KYP8L8X">
							Getting started with Google Workspace Specialization
						</Link>
					</li>
				</ul>
			</Section>

			<Section title="⚽ EXTRACURRICULARS">
				<ul className="flex list-disc flex-col gap-2 pl-4">
					<li>
						<div className="flex items-center justify-between font-semibold">
							<span>
								Co-Founded{' '}
								<Link href="https://hack.dlrc.in">
									HackDLRC
								</Link>
							</span>
							<span>Nov 2023</span>
						</div>
						<p>
							Launched a coding competition with a friend.
							Developed a platform for the competition in React.
							Reached out to sponsors, raising $14000 worth of
							awards. Designed posters and messages to promote the
							event to schools and communities. Authored coding
							challenges. Organized an award ceremony. Recruited
							and now mentoring 3 students to take lead for future
							events.
						</p>
					</li>
					<li>
						<div className="flex items-center justify-between font-semibold">
							<span>Teaching A-level Computer Science</span>
							<span>Jun 2024 - Oct 2024</span>
						</div>
						<p>
							Taught the A-level CS to 12th grade. Organized
							classes 4x/wk. Maintained a{' '}
							<Link href="https://anshtiwatne.notion.site/c8f9c4a9428f4ba89e9f16052c67ce70?v=e25e3819add7406a97357dfd83cfebb4">
								lesson plan
							</Link>
							. Planned mock exams and gave students feedback on
							answers, improving grades ~20% from the previous
							year. Handled exam setup for school.
						</p>
					</li>
					<li>
						<div className="flex items-center justify-between font-semibold">
							<span>Co-Led School's CS-Club</span>
							<span>Jun 2022 - Feb 2023</span>
						</div>
						<p>
							Organized classes 2x/wk. Taught computer
							fundamentals, Python basics, microprocessors and
							game development. Culminated each topic organizing a
							hands-on group project.
						</p>
					</li>
					<li>
						<div className="flex items-center justify-between font-semibold">
							<span>Ultimate Frisbee</span>
							<span>Jul 2023 - Nov 2023</span>
						</div>
						<p>
							Member of school's ultimate frisbee team.
							Participated in weekly practices. Competed in the
							West Regionals National School Ultimate
							Championship, securing 3rd place, awarded MVP for
							one of the matches.
						</p>
					</li>
				</ul>
			</Section>

			<Section title="🏆 COMPETITIONS">
				<ul className="list-disc pl-4">
					<li>
						<div className="flex items-center justify-between">
							National School Ultimate Championship
							<Link
								href="https://drive.google.com/file/d/1-YnX3m89M2SPnqGH226EmcE7CeSox8Qj"
								target="_blank"
							>
								Certificate{' '}
								<FontAwesomeIcon
									className="ml-1"
									icon={faArrowUpRightFromSquare}
									size="xs"
								/>
							</Link>
						</div>
					</li>
					<li>
						<div className="flex items-center justify-between">
							CS50x Puzzle Day 2024
							<Link
								href="https://cs50.harvard.edu/certificates/c5bdea6f-5ed8-47b6-b996-e57ed14f995"
								target="_blank"
							>
								Certificate{' '}
								<FontAwesomeIcon
									className="ml-1"
									icon={faArrowUpRightFromSquare}
									size="xs"
								/>
							</Link>
						</div>
					</li>
					<li>
						<div className="flex items-center justify-between">
							CS50x Puzzle Day 2023
							<Link
								href="https://cs50.harvard.edu/certificates/2bbc0ffc-e04f-4cf5-8fbc-e86cebfe4b63"
								target="_blank"
							>
								Certificate{' '}
								<FontAwesomeIcon
									className="ml-1"
									icon={faArrowUpRightFromSquare}
									size="xs"
								/>
							</Link>
						</div>
					</li>
					<li>
						<div className="flex items-center justify-between">
							Google Code Jam 2023
							<Link
								href="https://drive.google.com/file/d/199bWai1cIFngA4zjRUP-CpYb--NpynOC"
								target="_blank"
							>
								Certificate{' '}
								<FontAwesomeIcon
									className="ml-1"
									icon={faArrowUpRightFromSquare}
									size="xs"
								/>
							</Link>
						</div>
					</li>
				</ul>
			</Section>

			<Footer />
		</main>
	)
}
