import React from 'react';
import logo from './../logo.svg';
import './StorePicker.css';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this)
  // }

  goToStore(event) {
    event.preventDefault();
    this.props.history.push(`store/${this.storeInput.value}`)
  }

  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input } } />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;