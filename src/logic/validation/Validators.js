import { ValidationUtils } from '@/logic/validation/ValidationUtils'
import { maxLength, required, requiredIf } from '@vuelidate/validators'

export class Validators {
  static required(message = 'Поле обязательно для заполнения') {
    return ValidationUtils.withParam(message, required)
  }

  static requiredIf(comparator, message = 'Поле обязательно для заполнения') {
    return ValidationUtils.withParam(message, requiredIf(comparator))
  }

  static validLength(length, message = `Введённое значение превышает допустимую длину`) {
    return ValidationUtils.withParam(message, maxLength(length))
  }
}
