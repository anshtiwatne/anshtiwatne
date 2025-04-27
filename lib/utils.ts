export function getDurationString(startDate: Date, endDate: Date | null) {
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
