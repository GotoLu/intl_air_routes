import React, { Component } from 'react';
import { connect } from 'react-redux';
import FromData from './from-data';
import ToCity from './to-city';

const changeFromCity = city => ({ type: 'CHANGE_FROM_CITY', payload: {fromCity: city} });
const changeFromMonth = month => ({ type: 'CHANGE_FROM_MONTH', payload: {fromMonth: month} });
const changeToCity = city => ({ type: 'CHANGE_TO_CITY', payload: {toCity: city} });

class SelectedArea extends Component {
  FROM_CITY = 'FROM_CITY';
  componentDidMount() {
    const { getRoutesList } = this.props;
    getRoutesList();
  }

  handleChangeFromData = (data, from) => {
    console.log(data);
    const { changeFromCity, changeFromMonth, getRoutesList } = this.props;
    if (from === this.FROM_CITY) {
      changeFromCity(data);
    } else {
      changeFromMonth(data);
    }
    getRoutesList();
  }

  handleChangeToCity = (city) => {
    const { changeToCity, getRoutesList } = this.props;
    changeToCity(city);
    getRoutesList();
  }

  render() {
    const fromCityList = [
      '北京',
      '上海',
      '广州',
      '成都',
      '昆明',
      '杭州',
      '厦门',
      '港澳台',
      '其他城市'
    ];
    const fromMonthList = [
      '全部月份',
      '8月 9月',
      '10月 11月',
      '12月 1月'
    ];
    const toCityList = [
      '热门',
      '亚洲',
      '美洲',
      '欧洲',
      '非洲/大洋洲'
    ];
    const { fromCity, fromMonth, toCity } = this.props;
    return (
      <div className="selected-area">
        <h3>国际•港澳台</h3>
        <span className="line">低价航线</span>
        <div className="selected-content">
          <FromData fromData={`${fromCity}出发`} fromDataList={fromCityList} onChange={(city) => this.handleChangeFromData(city, this.FROM_CITY)} />
          <FromData fromData={fromMonth} fromDataList={fromMonthList} onChange={this.handleChangeFromData} />
          <ToCity toCity={toCity} toCityList={toCityList} onChange={this.handleChangeToCity} />
        </div>
      </div>
    );
  }
}
//
const getRoutesList = () => (dispatch, getState) => {
  console.log(getState());
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

// const mapDispatchToProps = dispatch => ({
//   changeFromCity: city => {
//     dispatch({ type: 'CHANGE_FROM_CITY', payload: {fromCity: city} })
//   }, changeFromMonth: month => {
//     dispatch({ type: 'CHANGE_FROM_MONTH', payload: {fromMonth: month} })
//   }, changeToCity: city => {
//     dispatch({ type: 'CHANGE_TO_CITY', payload: {toCity: city} })
//   }, getRoutesList
// });

export default connect(mapStateToProps, mapDispatchToProps)(SelectedArea);
// export default SelectedArea;
