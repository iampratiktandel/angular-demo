export class Employee {
  id: number;
  empName: string;
  empSalary: string;
  empAddress: Address;

  constructor() {
    this.id = null;
    this.empName = null;
    this.empSalary = null;
    this.empAddress = new Address();
  }
}

export class Address {
  state: string;
  city: string;
  pincode: number;

  constructor() {
    this.state = null;
    this.city = null;
    this.pincode = null;
  }
}