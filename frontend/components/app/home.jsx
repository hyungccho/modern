import React from 'react';
import { withRouter } from 'react-router';

// Components
import Sidebar from 'components/app/sidebar';
import Navbar from 'components/app/navigation/navbar';

// Plugins
import find from 'lodash/find';

const navSections = {
  header: {
    // @todo: FIX THIS
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
          options: []
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
  }
  
  componentDidMount () {
    this.props.requestBusinesses()
  }
  
  actionDispatcher (action) {
    switch (action) {
      case 'create_business':
        break;
      case 'log_out':
        this.props.logout();
        break;
      default:
        console.log("I don't know how to handle this action");
    };
  }
  
  render () {
    return (
      <div className='wrapper'>
        <Sidebar />
        <div className='main-panel'>
          <Navbar navSections={ navSections }
                  actionDispatcher={ this.actionDispatcher }
          />
        </div>
      </div>
    );
  }
};

export default withRouter(Home);