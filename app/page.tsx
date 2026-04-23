// eslint-disable @typescript-eslint/no-explicit-any

import '@fortawesome/fontawesome-svg-core/styles.css'

import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

import YAML from 'yaml'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faArrowUpRightFromSquare,
	faGlobe,
} from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import ThemeSwitch from '@/components/theme-switch'
import CowSay from '@/components/cowsay'
import Link from '@/components/link'
import TimeDuration from '@/components/time-duration'

config.autoAddCss = false
library.add(fab)

const DISPLAY_MODE: 'website' | 'cv' = 'website'

async function getProfileData(): Promise<unknown> {
	const __filename = fileURLToPath(import.meta.url)
	const __dirname = path.dirname(__filename)

	const filePath = path.join(__dirname, '..', 'data', 'profile-data.yml')
	const fileContents = await fs.readFile(filePath, { encoding: 'utf-8' })
	const data = YAML.parse(fileContents, { customTags: ['timestamp'] })

	return data
}

function Header({ profileData }: { profileData: any }) {
	return DISPLAY_MODE === 'cv' ? (
		<header className="flex items-center justify-between text-lg text-[#52525B] dark:text-[#D4D4D8]">
			<Link
				className="text-[#52525B] dark:text-[#D4D4D8]"
				color="foreground"
				href={`mailto:${profileData.personalInfo.email}`}
			>
				📧 {profileData.personalInfo.email}
			</Link>
			<Link
				className="text-[#52525B] dark:text-[#D4D4D8]"
				color="foreground"
				href={`tel:${profileData.personalInfo.phone.replace(/\s+/g, '')}`}
			>
				📞 {profileData.personalInfo.phone}
			</Link>
		</header>
	) : (
		<header className="flex items-center justify-between text-lg text-[#52525B] dark:text-[#D4D4D8]">
			<Link
				href="/"
				className="font-bold tracking-wide"
				color="foreground"
			>
				{profileData.personalInfo.name}
			</Link>
			<nav data-nosnippet className="flex items-center gap-2 font-medium">
				<Link
					color="foreground"
					className="text-[#52525B] dark:text-[#D4D4D8]"
					href={`mailto:${profileData.personalInfo.email}`}
				>
					📧 Contact
				</Link>
				|
				<ThemeSwitch />
			</nav>
		</header>
	)
}

function Footer({ profileData }: { profileData: any }) {
	return (
		<footer className="flex items-center justify-between pt-10">
			{DISPLAY_MODE === 'cv' ? (
				<Link
					className="flex items-center gap-2 text-[#52525B] dark:text-[#D4D4D8]"
					color="foreground"
					href={profileData.personalInfo.website}
				>
					<FontAwesomeIcon icon={faGlobe} size="lg" />
					<span>{profileData.personalInfo.website.replace(/^https?:\/\//, '')}</span>
				</Link>
			) : (
				<div className="flex items-center gap-2 text-[#52525B] dark:text-[#D4D4D8]">
					<FontAwesomeIcon icon={faCopyright} />
					<span>{profileData.personalInfo.name}</span>
				</div>
			)}
			<div className="flex items-center gap-4">
				{profileData.profiles.map((profile) => (
					<Link
						key={profile.link}
						className="text-[#52525B] dark:text-[#D4D4D8]"
						color="foreground"
						href={profile.link}
					>
						<FontAwesomeIcon
							icon={['fab', profile.icon]}
							size="lg"
						/>
					</Link>
				))}
			</div>
		</footer>
	)
}

function Section({
	title,
	emoji,
	children,
}: {
	title: string
	emoji?: string
	children: React.ReactNode
}) {
	return (
		<div className="flex flex-col gap-2">
			<p className="text-lg font-bold">{(DISPLAY_MODE != 'cv') && emoji} {title}</p>
			<div className="ml-2 flex flex-col gap-2">{children}</div>
		</div>
	)
}

export default async function Home() {
	const profileData: any = await getProfileData()

	return (
		<main
			itemScope
			itemType="https://schema.org/Person"
			className={`${DISPLAY_MODE === 'website' ? 'leading-relaxed' : ''} mx-auto flex max-w-3xl flex-col gap-8 p-4 tracking-wide text-[#27272A] dark:text-[#F4F4F5]`}
		>
			<Header profileData={profileData} />

			<p data-nosnippet className="mb-[-1rem] pt-4 text-4xl font-bold">
				{DISPLAY_MODE === 'cv' ? (
					<span className="ml-1">{profileData.personalInfo.name}</span>
				) : (
					<span className="sm:ml-[-0.5rem]">👋 Hi, I'm {profileData.personalInfo.name.split(' ')[0]}</span>
				)}
			</p>
			<p
				itemProp="description"
				className={DISPLAY_MODE === 'cv' ? 'ml-1' : 'ml-2'}
			>
				{profileData.personalInfo.about}
			</p>

			<Section title="PROJECTS" emoji="🛠️">
				<p>
					There are several projects I've worked on which are usually
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

			<Section title="WORK EXPERIENCE" emoji="🧑‍💻">
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
								<TimeDuration
									startDate={experience.startDate}
									endDate={experience.endDate}
								/>
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

			<Section title="ADDITIONAL EXPERIENCE" emoji="💼">
				<ul className="flex list-disc flex-col gap-2 pl-4">
					{profileData.additionalExperience.map((experience) => (
						<li key={experience.role}>
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
								<TimeDuration
									startDate={experience.startDate}
									endDate={experience.endDate}
								/>
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

			<div className="flex flex-col justify-between gap-8 sm:flex-row">
				<Section title="LANGUAGES (computer)" emoji="🖥️">
					<ul className="list-disc pl-4">
						{profileData.computerLanguages.map((language) => (
							<li key={language.name}>
								{language.name} — {language.proficiency}
							</li>
						))}
					</ul>
				</Section>
				<div className="flex flex-col gap-8 sm:gap-4">
					<Section title="LANGUAGES (human)" emoji="🌐">
						<ul className="list-disc pl-4">
							{profileData.humanLanguages.map((language) => (
								<li key={language.name}>
									{language.name} — {language.proficiency}
								</li>
							))}
						</ul>
					</Section>
					<Section title="SKILLS" emoji="🤹">
						<ul className="list-disc pl-4">
							{profileData.skills.map((skill) => (
								<li key={skill}>{skill}</li>
							))}
						</ul>
					</Section>
				</div>
			</div>

			<Section title="COMMUNITY SERVICE" emoji="🤝">
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
								<TimeDuration
									startDate={service.startDate}
									endDate={service.endDate}
								/>
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

			<Section title="EDUCATION & TESTING" emoji="📝">
				{/* TODO: structure this section better and move degree data to profile-data.yml */}
				<div>
					<div className="flex items-center justify-between font-semibold">
						<span>
							B.Sc. Computer Science (English), Saarland University
						</span>
						<TimeDuration
							startDate={new Date("2025-10-01")}
							endDate={null}
						/>
					</div>
					<p>Current GPA: <span className="font-semibold">1.0</span> (German scale)</p>
					<div className="flex items-center gap-4">
						<Link
							className="font-medium"
							href="https://drive.google.com/file/d/1HopBg34XnCKzYywrU0n2J2VyEDdoBLT5"
							target="_blank"
						>
							Transcript{' '}
							<FontAwesomeIcon
								className="ml-1"
								icon={faArrowUpRightFromSquare}
								size="xs"
							/>
						</Link>
					</div>
				</div>
				<div className="flex flex-col justify-between gap-2 sm:flex-row">
					{profileData.secondarySchoolQualifications.map((exam) => (
						<div key={exam.qualification}>
							<p className="font-semibold">
								{exam.qualification} ({exam.gradeScale})
							</p>
							<ul className="list-disc pl-4">
								{exam.subjects.map((subject) => (
									<li key={subject.name}>
										{subject.name}: <span className="font-semibold">{subject.grade}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="flex flex-col justify-between pt-1 sm:flex-row">
					<span>
						<span className="font-semibold">SAT</span> (superscore):{' '}
						<span className="font-semibold">1530</span>/1600
					</span>
					<span>Reading & Writing: <span className="font-semibold">740</span>, Math: <span className="font-semibold">790</span></span>
				</div>
				<div>
					<span className="font-semibold">IELTS</span>: overall band
					score <span className="font-semibold">8</span>
				</div>
			</Section>

			<Section title="SUMMER PROGRAMS" emoji="🌞">
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
								<TimeDuration
									startDate={program.startDate}
									endDate={program.endDate}
								/>
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

			<Section title="ONLINE COURSES" emoji="📚">
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

			<Section title="EXTRACURRICULARS" emoji="⚽">
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
								<TimeDuration
									startDate={extracurricular.startDate}
									endDate={extracurricular.endDate}
								/>
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

			<Section title="COMPETITIONS" emoji="🏆">
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

			{DISPLAY_MODE === 'website' && (
				<div className="flex w-full justify-end">
					<CowSay text="View as PDF" link="/cv" />
				</div>
			)}

			<Footer profileData={profileData} />
		</main>
	)
}
