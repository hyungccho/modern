import React from 'react';

// Plugins
import classNames from 'classnames';

// Components
import NavDropdown from 'components/app/navigation/nav_dropdown';

class Navbar extends React.Component {
  constructor (props) {
    super(props);
    this.buildNav = this.buildNav.bind(this);
    this.buildSection = this.buildSection.bind(this);
    this.buildHeader = this.buildHeader.bind(this);
  }
  
  buildHeader () {
    if (this.props.navSections.header) {
      return (
        <div className='navbar-header'>
          <a href='#' className='navbar-brand'>
            { this.props.navSections.header.name }
          </a>
        </div>
      );
    } else {
      throw('Build a header in your navSections!');
    }
  }
  
  buildNav () {
    let sections = [];
    
    for (var [index, section] of this.props.navSections.sections.entries()) {
      sections.push(this.buildSection(section, index));
    }
    
    return sections;
  }
  
  buildSection (section, index) {
    let elements = [];
    let navClass = classNames('nav', 'navbar-nav', {
      'navbar-right': section.alignRight,
      'navbar-left': section.alignLeft
    });
    
    for (var [index, item] of section.items.entries()) {
      switch (item.type) {
        case 'dropdown':
          elements.push(
            <NavDropdown dropdownOptions={ item }
                         key={ index }
                         actionDispatcher={ this.props.actionDispatcher }
            />
          );
          break;
        default:
          console.log("I don't know how to build this item");
      };
    }
    
    return (
      <ul className={ navClass } key={ index }>
        { elements }
      </ul>
    );
  }
  
  render () {
    return (
      <nav className="navbar navbar-default navbar-fixed">
        <div className="container-fluid">
          { this.buildHeader() }
          <div className="collapse navbar-collapse">
            { this.buildNav() }
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;