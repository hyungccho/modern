import React from 'react';

// Constants
import { countryOptions, stateOptions } from 'constants/location_options';

// Plugins
import merge from 'lodash/merge';
import bind from 'lodash/bind';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';

// Mixins
import FormValidation from 'mixins/form_validation';

class BusinessCreateModal extends React.Component {
  constructor (props) {
    super(props);
    this.defaultState = {
      name: '',
      country: 'United States',
      state: 'Alabama',
      city: '',
      address: '',
      zip: '',
      errors: {}
    }
    
    this.state = merge({}, this.defaultState);
    
    const validations = {
      name: {
        fn: (value) => {
          if (value == '') {
            return 'Enter a business name';
          }
        }
      },
      country: {
        fn: (value) => {
          if (value == '') {
            return 'Select a country';
          }
        }
      },
      state: {
        fn: (value) => {
          if (value == '') {
            return 'Select a state';
          }
        }
      },
      city: {
        fn: (value) => {
          if (value == '') {
            return 'Enter a city';
          }
        }
      },
      address: {
        fn: (value) => {
          if (value == '') {
            return 'Enter an address';
          }
        }
      },
      zip: {
        fn: (value) => {
          if (value == '') {
            return 'Enter a zipcode';
          }
        }
      }
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formValidation = new FormValidation(validations);
  }
  
  componentDidMount () {
    $('#business-create-modal').modal({
      keyboard: true,
      show: false
    });
    
    $('#business-create-modal').on('hidden.bs.modal', bind((e) => {
      this.formValidation.clearErrors();
      this.setState(this.defaultState);
      $('.selectpicker').selectpicker('refresh');
    }, this));
    
    $('#business-create-modal').on('shown.bs.modal', bind((e) => {
      $('#business-create-modal').css('height', $('.modal-dialog').height())
    }, this));
    
    $('.selectpicker').selectpicker({
      dropupAuto: false,
      style: 'btn-primary',
      size: 4
    });
    
    $('.selectpicker').on('change', (e) => {
      this.setState({ [e.target.dataset.value]: e.target.value });
    });
  }
  
  componentDidUpdate () {
    $('#business-create-modal').css('height', $('.modal-dialog').height())
  }
  
  buildHeader () {
    return (
      <div className='modal-header'>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        
        <h4 className='modal-title'>New Business</h4>
      </div>
    );
  }
  
  buildFieldHeader () {
    return (
      <fieldset className='header'>
        <legend>Basic Information</legend>
      </fieldset>
    );
  }
  
  buildFieldTextInput (className = '', label = '') {
    var fieldClassName = classNames(className, {
      'has-error': this.formValidation.hasError(className)
    });
    
    return (
      <fieldset className={ fieldClassName }>
        <div className='form-group'>
          <label className='col-sm-3 control-label'>{ label }</label>
          <div className='col-sm-9'>
            <input type='text'
                   className='form-control'
                   onChange={ this.update(className) }
                   onBlur={ this.validateField(className) }
                   value={ this.state[className] } />
            { 
              (() => {
                if (this.state.errors[className]) {
                 return <span className='error'>{ this.state.errors[className] }</span>;
                }
              })()
            }
          </div>
        </div>
      </fieldset>
    );
  }
  
  validateField (field) {
    var validateCallback = (e) => {
      this.formValidation.validateField(field, e.currentTarget.value);
      this.setState({ errors: this.formValidation.errors });
    };
    
    return validateCallback.bind(this);
  }
  
  buildFieldSelectInput (className = '', label = '', options) {
    return (
      <fieldset className={ className }>
        <div className='form-group'>
          <label className='col-sm-3 control-label'>{ label }</label>
          <div className='col-sm-5'>
            <select className='selectpicker'
                    onBlur={ this.validateField(className) }
                    data-value={ className }
                    readOnly='true'
                    value={ this.state[className] }>
              {
                options.map((optionName, index) => {
                  return <option key={ index } value={ optionName }>{ optionName }</option>;
                }) 
              }
            </select>
          </div>
        </div>
      </fieldset>
    );
  }
  
  buildFooter () {
    var submitClass = classNames('btn btn-fill create-business', {
      'disabled': !isEmpty(this.state.errors),
      'btn-success': isEmpty(this.state.errors)
    });
    
    return (
      <div className='modal-footer'>
        <button type="button" 
                className={ submitClass }
                onClick={ this.handleSubmit }>Create</button>
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    );
  }
  
  update (field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    };
  }
  
  handleSubmit () {
    if (this.formValidation.hasAnyErrors(this.state)) {
      this.setState({ errors: this.formValidation.errors });
    } else {
      $('#business-create-modal').hide();
      this.props.createBusiness(this.state);
    }
  }
  
  render () {
    return (
      <div id='business-create-modal' className='modal fade' tabIndex='-1'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            { this.buildHeader() }
            
            <div className='modal-body'>
              <div className='container-fluid'>
                <form className='form-horizontal'>
                  { this.buildFieldTextInput('name', 'Business Name:') }
                  { this.buildFieldSelectInput('country', 'Country:', countryOptions) }
                  { this.buildFieldSelectInput('state', 'State:', stateOptions) }
                  { this.buildFieldTextInput('city', 'City:') }
                  { this.buildFieldTextInput('address', 'Address:') }
                  { this.buildFieldTextInput('zip', 'Zip:') }
                </form>
              </div>
            </div>
            
            { this.buildFooter() }
          </div>
        </div>
      </div>
    );
  }
};

export default BusinessCreateModal;