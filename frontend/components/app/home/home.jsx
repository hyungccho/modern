import React from 'react';
import { withRouter } from 'react-router';

// Components
import Sidebar from 'components/app/sidebar';
import Navbar from 'components/app/navigation/navbar';
import BusinessPanels from 'components/app/home/business_panels';
import BusinessCreateModal from 'components/app/home/business_create_modal';

// Plugins
import find from 'lodash/find';
import isEmpty from 'lodash/isEmpty';

const navSections = {
  header: {
    // @todo: FIX THIS
    // @todo: Fix Hardcore on Notifcation First Option
    name: 'Index'
  },
  sections: [
    {
      alignRight: true,
      items: [
        {
          type: 'dropdown',
          header: { icon: 'fa fa-list', text: '', animation: 'btn-magnify' },
          options: [
            { icon: 'fa fa-plus', text: 'Create Business', action: 'create_business' }
          ]
        },
        {
          type: 'dropdown',
          header: { icon: 'ti-bell', text: '', animation: 'btn-rotate' },
          options: [
            { icon: 'fa fa-file', text: 'Ding dong! You received a file! It says: Mujin is a fag fuck' }
          ]
        },
        {
          type: 'dropdown',
          header: { icon: 'ti-settings', text: '', animation: 'btn-rotate' },
          options: [
            { icon: 'fa fa-sign-out', text: 'Log Out', action: 'log_out' }
          ]
        }
      ]
    }
  ]
};

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.actionDispatcher = this.actionDispatcher.bind(this);
    this.state = {
      hasBusinesses: true
    }
  }
  
  componentDidMount () {
    this.props.requestBusinesses();
  }
  
  componentWillReceiveProps (newProps) {
    if (isEmpty(newProps.currentAccount)) {
      this.props.router.push('/');
    }
  }
  
  actionDispatcher (action) {
    switch (action) {
      case 'create_business':
        this.openCreateBusinessModal();
        break;
      case 'log_out':
        this.props.logout();
        break;
      default:
        console.log("I don't know how to handle this action");
    };
  }
  
  openCreateBusinessModal () {
    $('#business-create-modal').modal('show');
  }
  
  render () {
    return (
      <div className='wrapper'>
        <Sidebar currentAccount={ this.props.currentAccount } />
        
        <div className='main-panel'>
          <Navbar navSections={ navSections } actionDispatcher={ this.actionDispatcher } />
          <div id='home-content' className='content'>
            <div className='container-fluid'>
              <BusinessPanels businesses={ this.props.businesses }/>
            </div>
          </div>
        </div>
        
        <BusinessCreateModal actionDispatcher={ this.actionDispatcher }
                             createBusiness={ this.props.createBusiness }/>
      </div>
    );
  }
};

export default withRouter(Home);