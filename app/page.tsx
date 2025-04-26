/* eslint-disable react/no-unescaped-entities */
'use client'

import NextLink from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faArrowUpRightFromSquare,
	faGlobe,
} from '@fortawesome/free-solid-svg-icons'
import ThemeSwitch from '@/components/theme-switch'
import profileData from '@/lib/profile-data'

const isResume = false

function getDurationString(startDate: Date, endDate: Date | null) {
	const options: Intl.DateTimeFormatOptions = {
		month: 'short',
		year: 'numeric',
	}
	const start = startDate.toLocaleDateString('en-US', options)
	const end = endDate
		? endDate.toLocaleDateString('en-US', options)
		: 'present'
	return `${start} - ${end}`
}

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
		<header
			data-nosnippet
			className="flex items-center justify-between text-lg text-[#52525B] dark:text-[#D4D4D8]"
		>
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
			<p itemProp="name" className="font-bold tracking-wide">
				ANSH TIWATNE
			</p>
			<nav className="flex items-center gap-2 font-medium">
				<Link color="foreground" href="https://github.com/anshtiwatne">
					<span className="text-[#52525B] dark:text-[#D4D4D8]">
						🔗 GitHub
					</span>
				</Link>
				|
				<ThemeSwitch />
			</nav>
		</header>
	)
}

function Footer() {
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
				{profileData.profiles.map((profile) => (
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
		<main
			itemScope
			itemType="https://schema.org/Person"
			className="mx-auto flex max-w-3xl flex-col gap-8 p-4 tracking-wide text-[#27272A] dark:text-[#F4F4F5]"
		>
			<Header />

			<p data-nosnippet className="mb-[-1rem] pt-4 text-4xl font-bold">
				{isResume ? 'Ansh Tiwatne' : "👋 Hi, I'm Ansh"}
			</p>
			<p itemProp="description">
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
					{profileData.projects.map((project) => (
						<li key={project.name}>
							{project.link ? (
								<Link
									href={project.link}
									className="font-semibold"
								>
									{project.name}
								</Link>
							) : (
								project.name
							)}
							{' — '}
							{project.description}
						</li>
					))}
				</ul>
			</Section>

			<Section title="👨‍💻 WORK EXPERIENCE">
				<ul className="flex list-disc flex-col gap-2 pl-4">
					{profileData.workExperience.map((experience) => (
						<li key={experience.org}>
							<div className="flex items-center justify-between font-semibold">
								<span>
									{experience.role} @{' '}
									{experience.orgLink ? (
										<Link href={experience.orgLink}>
											{experience.org}
										</Link>
									) : (
										experience.org
									)}
								</span>
								<span>
									{getDurationString(
										experience.startDate,
										experience.endDate,
									)}
								</span>
							</div>
							<p>{experience.description}</p>
							<div className="flex items-center gap-4">
								{experience.attachments.map((attachment) => (
									<Link
										key={attachment.link}
										className="font-medium"
										href={attachment.link}
										target="_blank"
									>
										{attachment.title}{' '}
										<FontAwesomeIcon
											className="ml-1"
											icon={faArrowUpRightFromSquare}
											size="xs"
										/>
									</Link>
								))}
							</div>
						</li>
					))}
				</ul>
			</Section>

			<Section title="💼 INTERNSHIPS">
				<ul className="flex list-disc flex-col gap-2 pl-4">
					{profileData.internships.map((internship) => (
						<li key={internship.role}>
							<div className="flex items-center justify-between font-semibold">
								<span>
									{internship.role} @{' '}
									{internship.orgLink ? (
										<Link href={internship.orgLink}>
											{internship.org}
										</Link>
									) : (
										internship.org
									)}
								</span>
								<span>
									{getDurationString(
										internship.startDate,
										internship.endDate,
									)}
								</span>
							</div>
							<p>{internship.description}</p>
							<div className="flex items-center gap-4">
								{internship.attachments.map((attachment) => (
									<Link
										key={attachment.link}
										className="font-medium"
										href={attachment.link}
										target="_blank"
									>
										{attachment.title}{' '}
										<FontAwesomeIcon
											className="ml-1"
											icon={faArrowUpRightFromSquare}
											size="xs"
										/>
									</Link>
								))}
							</div>
						</li>
					))}
				</ul>
			</Section>

			<div className="flex justify-between">
				<Section title="🖥️ LANGUAGES (computer)">
					<ul className="list-disc pl-4">
						{profileData.computerLanguages.map((language) => (
							<li key={language.name}>
								{language.name} — {language.proficiency}
							</li>
						))}
					</ul>
				</Section>
				<div className="flex flex-col gap-4">
					<Section title="🌐 LANGUAGES (human)">
						<ul className="list-disc pl-4">
							{profileData.humanLanguages.map((language) => (
								<li key={language.name}>
									{language.name} — {language.proficiency}
								</li>
							))}
						</ul>
					</Section>
					<Section title="🤹 SKILLS">
						<ul className="list-disc pl-4">
							{profileData.skills.map((skill) => (
								<li key={skill}>{skill}</li>
							))}
						</ul>
					</Section>
				</div>
			</div>

			<Section title="🤝 COMMUNITY SERVICE">
				<ul className="flex list-disc flex-col gap-2 pl-4">
					{profileData.communityService.map((service) => (
						<li key={service.role}>
							<div className="flex items-center justify-between font-semibold">
								<span>
									{service.role} @{' '}
									{service.orgLink ? (
										<Link href={service.orgLink}>
											{service.org}
										</Link>
									) : (
										service.org
									)}
								</span>
								<span>
									{getDurationString(
										service.startDate,
										service.endDate,
									)}
								</span>
							</div>
							<p>{service.description}</p>
							<div className="flex items-center gap-4">
								{service.attachments.map(
									(attachment: {
										title: string
										link: string
									}) => (
										<Link
											key={attachment.link}
											className="font-medium"
											href={attachment.link}
											target="_blank"
										>
											{attachment.title}{' '}
											<FontAwesomeIcon
												className="ml-1"
												icon={faArrowUpRightFromSquare}
												size="xs"
											/>
										</Link>
									),
								)}
							</div>
						</li>
					))}
				</ul>
			</Section>

			<Section title="📝 EDUCATION & TESTING">
				<div className="flex justify-between">
					{profileData.boardExams.map((exam) => (
						<div key={exam.qualification}>
							<p className="font-semibold">
								{exam.qualification}: {exam.year}
							</p>
							<ul className="list-disc pl-4">
								{exam.subjects.map((subject) => (
									<li key={subject.name}>
										{subject.name}: {subject.grade}
									</li>
								))}
							</ul>
						</div>
					))}
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
					{profileData.summerPrograms.map((program) => (
						<li key={program.name}>
							<div className="flex items-center justify-between font-semibold">
								{program.link ? (
									<Link href={program.link}>
										{program.name}
									</Link>
								) : (
									program.name
								)}
								<span>
									{getDurationString(
										program.startDate,
										program.endDate,
									)}
								</span>
							</div>
							<p>{program.description}</p>
							<div className="flex items-center gap-4">
								{program.attachments.map((attachment) => (
									<Link
										key={attachment.link}
										className="font-medium"
										href={attachment.link}
										target="_blank"
									>
										{attachment.title}{' '}
										<FontAwesomeIcon
											className="ml-1"
											icon={faArrowUpRightFromSquare}
											size="xs"
										/>
									</Link>
								))}
							</div>
						</li>
					))}
				</ul>
			</Section>

			<Section title="📚 ONLINE COURSES">
				<ul className="list-disc pl-4">
					{profileData.onlineCourses.map((course) => (
						<li key={course.name}>
							{course.certificate ? (
								<Link href={course.certificate}>
									{course.name}
								</Link>
							) : (
								course.name
							)}
						</li>
					))}
				</ul>
			</Section>

			<Section title="⚽ EXTRACURRICULARS">
				<ul className="flex list-disc flex-col gap-2 pl-4">
					{profileData.extracurriculars.map((extracurricular) => (
						<li key={extracurricular.name}>
							<div className="flex items-center justify-between font-semibold">
								{extracurricular.link ? (
									<Link href={extracurricular.link}>
										{extracurricular.name}
									</Link>
								) : (
									extracurricular.name
								)}
								<span>
									{getDurationString(
										extracurricular.startDate,
										extracurricular.endDate,
									)}
								</span>
							</div>
							<p>{extracurricular.description}</p>
							<div className="flex items-center gap-4">
								{extracurricular.attachments.map(
									(attachment: {
										title: string
										link: string
									}) => (
										<Link
											key={attachment.link}
											className="font-medium"
											href={attachment.link}
											target="_blank"
										>
											{attachment.title}{' '}
											<FontAwesomeIcon
												className="ml-1"
												icon={faArrowUpRightFromSquare}
												size="xs"
											/>
										</Link>
									),
								)}
							</div>
						</li>
					))}
				</ul>
			</Section>

			<Section title="🏆 COMPETITIONS">
				<ul className="list-disc pl-4">
					{profileData.competitions.map((competition) => (
						<li key={competition.name}>
							<div className="flex items-center justify-between">
								{competition.name}
								<Link
									href={competition.certificate}
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
					))}
				</ul>
			</Section>

			<Footer />
		</main>
	)
}
