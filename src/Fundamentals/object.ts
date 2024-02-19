let employee: {
	readonly id: number,
	name: string,
	payday: (date: Date) => void
} = {
	id: 1,
	name: 'John',
	payday: (date: Date):void => {
		console.log(date)
	}
}
