// Plugins
import values from 'lodash/values';
import filter from 'lodash/filter';

class FormValidation {
  constructor(validations) {
    this.validations = validations;
    this.errors = {};
  }
  
  validateField (field, value) {
    if (this.validations[field]) {
      this.errors[field] = this.validations[field].fn(value);
    }
  }
  
  getErrors (field) {
    return this.errors[field];
  }
  
  hasError(field) {
    return (!!this.errors[field]);
  }
  
  hasAnyErrors () {
    return (filter(values(this.errors), (val) => val).length);
  }
  
  clearErrors () {
    this.errors = {};
  }
};

export default FormValidation;