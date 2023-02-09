export class Department {
  constructor (department) {
    if (department) {
      this.id = department.id;
      this.name = department.name;
    } else {
      this.id = 0;
      this.name = '';
    }
  }

  static toRequest(department) {
    return {
      id: department.id,
      name: department.name
    }
  }
}
