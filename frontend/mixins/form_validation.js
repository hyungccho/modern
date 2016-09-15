// Plugins
import values from 'lodash/values';
import filter from 'lodash/filter';
import forEach from 'lodash/foreach';
import unset from 'lodash/unset';

class FormValidation {
  constructor(validations) {
    this.validations = validations;
    this.errors = {};
    this.fieldsValidated = [];
  }
  
  validateField (field, value) {
    this.addFieldToValidated();
    
    if (this.validations[field]) {
      var error = this.validations[field].fn(value);
      
      if (error) {
        this.errors[field] = error;
      } else {
        unset(this.errors, field);
      }
    }
  }
  
  addFieldToValidated (field) {
    if (this.fieldsValidated.indexOf(field) == -1) {
      this.fieldsValidated.push(field);
    }
  }
  
  getErrors (field) {
    return this.errors[field];
  }
  
  hasError(field) {
    return (!!this.errors[field]);
  }
  
  hasAnyErrors (formState) {
    if (this.fieldsValidated.length != Object.keys(this.validations).length) {
      this.checkAllErrors(formState);
    }
    
    return (filter(values(this.errors), (val) => val).length);
  }
  
  checkAllErrors (formState) {
    forEach(this.validations, (value, key) => {
      this.validateField(value, key);
    });
  }
  
  clearErrors () {
    this.errors = {};
  }
};

export default FormValidation;