export class Teacher {
  constructor (teacher) {
    if (teacher) {
      this.id = teacher.id;
      this.fullName = teacher.fullName;
      this.departmentId = teacher.department ? teacher.department.id : teacher.departmentId;
      this.departmentName = teacher.department ? teacher.department.name : teacher.departmentName;

      this.department =
        teacher.department ? teacher.department : {id: teacher.departmentId, name: teacher.departmentName};

    } else {
      this.id = 0;
      this.name = '';
      this.departmentId = null;
      this.departmentName = '';
    }
  }

  static toRequest(teacher) {
    return {
      id: teacher.id,
      fullName: teacher.fullName,
      departmentId: teacher.department ? teacher.department.id : teacher.departmentId,
    }
  }
}
