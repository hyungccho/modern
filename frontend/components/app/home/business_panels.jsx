import React from 'react';

// Components
import BusinessCard from 'components/app/home/business_card';

// Plugins
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';

class BusinessPanels extends React.Component {
  renderBusinessCards () {
    return (
      this.props.businesses.map((business, index) => {
        return <BusinessCard business={ business } key={ business.id } />;
      })
    );
  }
  
  noBusinesses () {
    return (
      <div className='col-xs-12'>
        <h4>
          Create your first business by clicking the <i className='fa fa-list'></i> above!
        </h4>
      </div>
    );
  }
  
  render () {
    var divClass = classNames('row', {
      'business-panels': !isEmpty(this.props.businesses),
      'no-businesses': isEmpty(this.props.businesses)
    })
    
    return (
      <div className={ divClass }>
        { isEmpty(this.props.businesses) ? this.noBusinesses() : this.renderBusinessCards() }
      </div>
    );
  }
};

export default BusinessPanels;