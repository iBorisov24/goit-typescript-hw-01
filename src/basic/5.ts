enum DayOfWeek {
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
	Sunday,
}

const isWeekend = (day: DayOfWeek) => {
	return day === 6 || day === 5;
};
