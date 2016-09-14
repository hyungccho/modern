import React from 'react';

class Sidebar extends React.Component {
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
              <p>
                { `${this.props.currentAccount.first_name} 
                   ${this.props.currentAccount.last_name}` } 
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Sidebar;