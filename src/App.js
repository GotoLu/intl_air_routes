import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectedArea from './component/selected-area';
import ShowArea from './component/show-area';
import './App.less';
import { getRoutesList } from './actions';

class App extends Component {
  componentDidMount() {
    const { getRoutesList } = this.props;
    getRoutesList();
  }

  render() {
    const { routesData } = this.props;
    return (
      <div className="intl-air-routes">
        <SelectedArea />
        {
          routesData[0] ? <ShowArea routesData={routesData} /> : null
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  routesData: state.routesData
});

const mapDispatchToProps = {
  getRoutesList
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
