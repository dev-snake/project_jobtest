type DateFormat = 'fullDate' | 'onlyTime' | 'onlyDate' | 'onlyDateReverse' | 'onlyMonthYear';

export function formatDate(isoString: string, format: DateFormat = 'fullDate') {
	const date = new Date(isoString);

	const pad = (num: number) => num.toString().padStart(2, '0');

	const hours = pad(date.getHours());
	const minutes = pad(date.getMinutes());
	const seconds = pad(date.getSeconds());

	const day = pad(date.getDate());
	const month = pad(date.getMonth() + 1);
	const year = date.getFullYear();

	switch (format) {
		case 'fullDate':
			return `${hours}:${minutes}:${seconds} - ${day}/${month}/${year}`;
		case 'onlyDate':
			return `${day}/${month}/${year}`;
		case 'onlyMonthYear':
			return `${month}/${year}`;
		case 'onlyDateReverse':
			return `${year}-${month}-${day}`;
		case 'onlyTime':
			return `${hours}:${minutes}:${seconds}`;
	}
}
