import React from 'react';

// Components
import Sidebar from 'components/app/sidebar';
import Navbar from 'components/app/navigation/navbar';

// Plugins
import find from 'lodash/find';

const navSections = {
  header: {
    name: 'Modern'
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
          options: []
        }
      ]
    }
  ]
};

class Home extends React.Component {
  constructor (props) {
    super(props);
  }
  
  componentDidMount () {
    this.props.requestBusinesses()
  }
  
  actionDispatcher (action) {
    switch (action) {
      case 'create_business':
        sweetAlert({
          title: 'Create a Business',
          label: 'Name',
          input: 'text',
          showCancelButton: true,
          confirmButtonText: 'Create',
          showLoaderOnConfirm: true,
          allowOutsideClick: false,
          preConfirm: (name) => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                let existingBusiness = find(this.props.businesses, (business) => {
                  business.name.toLowerCase() == name.toLowerCase()
                });
                
                if (existingBusinesses) {
                  reject(`You already have a business with the name of ${name}`);
                } else if (!name) {
                  reject('Give your business a name!');
                } else {
                  resolve()
                }
              }, 2000);
            });
          }
        }).then((name) => {
          sweetAlert({
            type: 'success',
            title: 'Easy!',
            html: `${name} was successfully created.`
          });
        });
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

export default Home;