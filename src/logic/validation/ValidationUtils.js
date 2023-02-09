import { helpers } from '@vuelidate/validators'

export class ValidationUtils {
  static withParam(message, validator) {
    return helpers.withParams({message}, validator)
  }
}
