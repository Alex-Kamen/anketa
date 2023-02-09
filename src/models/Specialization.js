export class Specialization {
  constructor (specialization) {
    if (specialization) {
      this.id = specialization.id;
      this.name = specialization.name;
      this.specialityId = specialization.speciality ? specialization.speciality.id : specialization.specialityId;
      this.specialityName = specialization.speciality ? specialization.speciality.name : specialization.specialityName;

      this.speciality = specialization.speciality
        ? specialization.speciality
        : {id: specialization.specialityId, name: specialization.specialityName};

    } else {
      this.id = 0;
      this.name = '';
      this.specialityId = null;
      this.specialityName = '';
    }
  }

  static toRequest(specialization) {
    return {
      id: specialization.id,
      name: specialization.name,
      specialityId: specialization.speciality ? specialization.speciality.id : specialization.specialityId,
    }
  }
}
