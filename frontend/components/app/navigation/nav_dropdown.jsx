import React from 'react';

// Plugins
import classNames from 'classnames';

class NavDropdown extends React.Component {
  constructor (props) {
    super(props);
    this.buildHeader = this.buildHeader.bind(this);
    this.buildListItem = this.buildListItem.bind(this);
    this.buildDropdownMenu = this.buildDropdownMenu.bind(this);
  }
  
  buildHeader () {
    let innerHeader = [];
    let icon;
    let text;
    let headerClassName = classNames(
      'dropdown-toggle',
      this.props.dropdownOptions.header.animation
    );
    
    if (this.props.dropdownOptions.header.icon) {
      icon = <i className={ this.props.dropdownOptions.header.icon }></i>;
    }
    
    if (this.props.dropdownOptions.header.text) {
      text = <span>{ this.props.dropdownOptions.header.text }</span>;
    }
    
    return (
      <a className={ headerClassName } data-toggle='dropdown'>
        { icon }
        { text }
      </a>
    );
  }
  
  buildDropdownMenu () {
    return (
      <ul className='dropdown-menu dropdown-with-icons'>
        {
          this.props.dropdownOptions.options.map((item, index) => {
            return this.buildListItem(item, index);
          })
        }
      </ul>
    );
  }
  
  buildListItem (item, index) {
    let innerListItem = [];
    let icon;
    let text;
    
    if (item.icon) {
      icon = <i className={ item.icon }></i>
    }
    
    if (item.text) {
      text = <span>{ item.text }</span>
    }
    
    return (
      <li onClick={ () => this.props.actionDispatcher(item.action) } key={ index }>
        <a>
          { icon }
          { text }
        </a>
      </li>
    );
  }
  
  render () {
    return (
      <li className='dropdown dropdown-with-icons'>
        { this.buildHeader() }
        { this.buildDropdownMenu() }
      </li>
    );
  }
};

export default NavDropdown;