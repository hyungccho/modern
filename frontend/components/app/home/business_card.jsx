import React from 'react';

// Plugins
import classNames from 'classnames';

class BusinessCard extends React.Component {
  // @todo: Replace Hardcoded Phone Number & Business Error
  buildHeader () {
    return (
      <div className='header'>
        <h5 className='title text-center'>{ this.props.business.name }</h5>
        <hr></hr>
      </div>
    );
  }
  
  buildContentRow (extraClass = '', icon = '', text = '') {
    const rowClass = classNames('row', extraClass);
    return (
      <div className={ rowClass }>
        <div className='col-xs-1 col-xs-offset-1'>
          <i className={ icon }></i>
        </div>
        
        <div className='col-xs-9'>
          <p>{ text }</p>
        </div>
      </div>
    );
  }
  
  buildFooter () {
    return (
      <div className='card-footer'>
        <hr></hr>
        <div className='row'>
          <div className='col-xs-8 col-xs-offset-2 text-center'>
            <button type='button' className='btn btn-wd btn-primary btn-move-right'>
              OPEN
              <span className='btn-label'>
                <i className='fa fa-chevron-right'></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  render () {
    return (
      <div className='col-lg-3 col-sm-6'>
        <div className='card'>
          { this.buildHeader() }
          
          <div className='content'>
            { 
              this.buildContentRow(
                '',
                'fa fa-map-marker',
                `${this.props.business.city}` + ', ' + `${this.props.business.state}`
              )
            }
            {
              this.buildContentRow(
                'info',
                'fa fa-phone',
                '818-461-2231'
              )
            }
            {
              this.buildContentRow(
                'danger',
                'fa fa-exclamation',
                'This business needs modifications'
              )
            }
          </div>
          
          { this.buildFooter() }
        </div>
      </div>
    );
  }
};

export default BusinessCard;