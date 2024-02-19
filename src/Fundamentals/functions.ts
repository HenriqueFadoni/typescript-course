function taxes(income: number): void {
	income = income - 5000;
	console.log('Your income after taxes is: ');
}

function calculate(value?: number): number {
	const newValue = value || 200;
	return newValue * 2;
}

function phone(number: number = 200, name: string): number {
	if (name == 'john') {
		return 55;	
	}
	
	if (number === 0) {
		return 0;
	}

	return number;
}

calculate(10);