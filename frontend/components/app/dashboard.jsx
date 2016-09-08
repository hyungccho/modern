import React from 'react';

// Components
import Sidebar from 'components/app/sidebar'

class Dashboard extends React.Component {
  render () {
    return (
      <div className='wrapper'>
        <Sidebar />
      </div>
    );
  }
};

export default Dashboard;