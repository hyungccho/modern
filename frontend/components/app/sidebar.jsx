import React from 'react';

class Sidebar extends React.Component {
  // @todo: Fix Hardcoded Name field
  render () {
    return (
      <div className='sidebar' data-background-color='brown'>
        <div className='sidebar-wrapper'>
          <div className='logo'>
            <a href='#' className='simple-text'>
              Modern
            </a>
          </div>
          
          <div className='user'>
            <div className='photo'></div>
            <div className='info'>
              <p>Jeremy Cho</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Sidebar;