// Missing DRY principles
type Emplyee = {
	readonly id: number,
	name: string,
	payday: (date: Date) => void
}

let hire: Emplyee = {
	id: 1,
	name: 'John',
	payday: (date: Date):void => {
		console.log(date)
	}
}

const payroll = (employee: Emplyee) => {
	console.log(employee.id)
}
