export class Filter {
  constructor () {
    const params = window.location.search.slice(1).split('&').map((param) => {
      const name = param.slice(0, param.indexOf('='));
      const value = param.slice(param.indexOf('=')+1);
      return {name, value: decodeURI(value)};
    });

    console.log(params)

    this._form = params.find((param) => param.name === 'formId') || {name: 'formId'};
    this._login = params.find((param) => param.name === 'login') || {name: 'login'};
    this._teacher = params.find((param) => param.name === 'teacher') || {name: 'teacher'};
    this._department = params.find((param) => param.name === 'department') || {name: 'department'};
    this._speciality = params.find((param) => param.name === 'speciality') || {name: 'speciality'};
    this._specialization = params.find((param) => param.name === 'specialization') || {name: 'specialization'};
    this._employeeType = params.find((param) => param.name === 'employeeType') || {name: 'employeeType'};
    this._educationType = params.find((param) => param.name === 'educationType') || {name: 'educationType'};
    this._age = params.find((param) => param.name === 'age') || {name: 'age'};
    this._discipline = params.find((param) => param.name === 'discipline') || {name: 'discipline'};
    this._searchText = params.find((param) => param.name === 'searchText') || {name: 'searchText'};
  }

  toRequest() {
    const fieldList = [
      '_form',
      '_login',
      '_teacher',
      '_department',
      '_speciality',
      '_specialization',
      '_employeeType',
      '_educationType',
      '_age',
      '_discipline',
      '_searchText',
    ]

    let params = [];

    for (const field of fieldList) {
      if (this[field].value) {
        params.push(`${this[field].name}=${this[field].value}`);
      }
    }

    return params.join('&');
  }

  get form () {
    return this._form.value
  }

  set form (value) {
    this._form.value = value
  }

  get login () {
    return this._login.value
  }

  set login (value) {
    this._login.value = value
  }

  get teacher () {
    return this._teacher.value
  }

  set teacher (value) {
    this._teacher.value = value
  }

  get department () {
    return this._department.value
  }

  set department (value) {
    this._department.value = value
  }

  get speciality () {
    return this._speciality.value
  }

  set speciality (value) {
    this._speciality.value = value
  }

  get specialization () {
    return this._specialization.value
  }

  set specialization (value) {
    this._specialization.value = value
  }

  get employeeType () {
    return this._employeeType.value
  }

  set employeeType (value) {
    this._employeeType.value = value
  }

  get educationType () {
    return this._educationType.value
  }

  set educationType (value) {
    this._educationType.value = value
  }

  get age () {
    return this._age.value
  }

  set age (value) {
    this._age.value = value
  }

  get discipline () {
    return this._discipline.value
  }

  set discipline (value) {
    this._discipline.value = value
  }

  get searchText () {
    return this._searchText.value
  }

  set searchText (value) {
    this._searchText.value = value
  }
}
