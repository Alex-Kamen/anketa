export class User {
  constructor (user) {
    if (user) {
      this.id = user.id;
      this.login = user.login;
      this.password = user.password;
      this.departmentId = user.department ? user.department.id : user.departmentId;
      this.specializationId = user.specialization ? user.specialization.id : user.specializationId;
      this.status = user.status;
      this.departmentName = user.department ? user.department.name : user.departmentName;
      this.specializationName = user.specialization ? user.specialization.name : user.specializationName;

      this.specialization =
        user.specialization ? user.specialization : {id: user.specializationId, name: user.specializationName};

      this.department = user.department ? user.department : {id: user.departmentId, name: user.departmentName};
    } else {
      this.id = 0;
      this.login = '';
      this.password = '';
      this.departmentId = null;
      this.specializationId = null;
      this.status = null;
      this.specialization = null;
      this.department = null;
      this.departmentName = '';
      this.specializationName = '';
    }
  }

  static statusOptionList() {
    return [
      {name: 'Персонал', value: 'staff'},
      {name: 'Работодатель', value: 'hirer'},
      {name: 'Администратор', value: 'admin'},
      {name: 'Студент', value: 'student'},
      {name: 'Зав. ф. кафедры', value: 'departmentManager'},
    ]
  }

  static toRequest(user) {
    return {
      id: user.id,
      login: user.login,
      status: user.status,
      password: user.password,
      departmentId: user.department ? user.department.id : user.departmentId,
      specializationId: user.specialization ? user.specialization.id : user.specializationId,
    }
  }
}
