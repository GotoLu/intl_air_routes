import React, { Component } from 'react';
import SelectedArea from './selected-area';
import ShowArea from './show-area';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="intl-air-routes">
        <SelectedArea />
        <ShowArea />
      </div>
    );
  }
}

export default App;
