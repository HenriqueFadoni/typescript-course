function kgToLbs(weight: number | string): number {
	//Narrowing
	if (typeof weight === 'string') {
		let newWeight = parseFloat(weight);
		return newWeight * 2.20462;
	} else {
		return weight * 2.20462;
	}
}

kgToLbs(10);
kgToLbs('10');