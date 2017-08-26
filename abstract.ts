
abstract class Department {
	constructor(public name: string) {
	}

	printName(): void {
		console.log("Department name: " + this.name);
	}

	abstract printMeeting(): void; 
}

class AccountingDepartment extends Department {
  constructor() {
  	super("Accounting Department"); 
  }

  printMeeting(): void {
  	console.log("The Accounting Department meets each Monday at 10am.");
  }

}
class HRDepartment extends Department {
  constructor() {
  	super("HR Department"); 
  }

  printMeeting(): void {
  	console.log("The HR Department meets each Monday at 2pm.");
  }

}
let account = new AccountingDepartment();
console.log(account.printName);
console.log(account.printMeeting);

let hr = new HRDepartment();
console.log(hr.printMeeting);
console.log(hr.printName);
