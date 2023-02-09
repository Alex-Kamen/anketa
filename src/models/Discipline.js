export class Discipline {
  constructor (discipline) {
    if (discipline) {
      this.id = discipline.id;
      this.name = discipline.name;
      this.departmentId = discipline.department ? discipline.department.id : discipline.departmentId;
      this.departmentName = discipline.department ? discipline.department.name : discipline.departmentName;

      this.department =
        discipline.department ? discipline.department : {id: discipline.departmentId, name: discipline.departmentName};

    } else {
      this.id = 0;
      this.name = '';
      this.departmentId = null;
      this.departmentName = '';
    }
  }

  static toRequest(discipline) {
    return {
      id: discipline.id,
      name: discipline.name,
      departmentId: discipline.department ? discipline.department.id : discipline.departmentId,
    }
  }
}
