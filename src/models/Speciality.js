export class Speciality {
  constructor (speciality) {
    if (speciality) {
      this.id = speciality.id;
      this.name = speciality.name;
    } else {
      this.id = 0;
      this.name = '';
    }
  }

  static toRequest(speciality) {
    return {
      id: speciality.id,
      name: speciality.name
    }
  }
}
