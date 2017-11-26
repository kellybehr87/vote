export class Official {
	name: string;
	address: string;
	party: string;

	constructor(data) {
		for(let key of Object.keys(data)) {
			this[key] = data[key];
		}
	}
}