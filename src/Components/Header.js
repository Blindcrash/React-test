import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';


class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  }
  render(){
    const {title,items} = this.props;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>{title}</h3>
        <ul className ="Menu">
          {items && items.map((item, key) => <li key={key}>{item.title}</li>)}
        </ul>
      </header>
    </div>
  );
}
};
export default Header;
