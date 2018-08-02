import React, { Component } from 'react';
import { connect } from 'react-redux';
import FromData from './from-data';
import ToCity from './to-city';
import {
  getRoutesList, changeFromCity, changeFromMonth, changeToCity
} from '../actions/index';
import {
  FROM_CITY, fromCityList, fromMonthList, toCityList
} from '../constants/index';

class SelectedArea extends Component {
  /*
   * 处理出发城市和月份更改的action派发
   * data: 更改的城市或者月份
   * from: 用来判断是否是用来派发城市的更改
   */
  handleChangeFromData = (data, from) => {
    const { changeFromCity, changeFromMonth, getRoutesList } = this.props;
    if (from === FROM_CITY) {
      changeFromCity(data);
    } else {
      changeFromMonth(data);
    }
    getRoutesList();
  }

  /*
   * 处理目的城市更改的action派发
   * city: 更改的城市
   */
  handleChangeToCity = (city) => {
    const { changeToCity, getRoutesList } = this.props;
    changeToCity(city);
    getRoutesList();
  }

  render() {
    const { fromCity, fromMonth, toCity } = this.props;
    return (
      <div className="selected-area">
        <h3>国际•港澳台</h3>
        <span className="line">低价航线</span>
        <div className="bg-img"><i /></div>
        <div className="selected-content">
          <FromData fromData={`${fromCity}出发`} fromDataList={fromCityList} onChange={(city) => this.handleChangeFromData(city, FROM_CITY)} />
          <FromData fromData={fromMonth} fromDataList={fromMonthList} onChange={this.handleChangeFromData} />
          <ToCity toCity={toCity} toCityList={toCityList} onChange={this.handleChangeToCity} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fromCity: state.fromCity,
  fromMonth: state.fromMonth,
  toCity: state.toCity
});

const mapDispatchToProps = {
  changeFromCity,
  changeFromMonth,
  changeToCity,
  getRoutesList
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedArea);
// export default SelectedArea;
