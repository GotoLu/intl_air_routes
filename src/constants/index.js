// 显示文字与url参数的映射表
const paramsMap = {
  '热门': 'Hot',
  '亚洲': 'Asia',
  '美洲': 'America',
  '欧洲': 'Europe',
  '非洲/大洋洲': 'Africa/Oceania',
  '全部月份': 'All',
  '8月 9月': '8,9',
  '10月 11月': '10,11',
  '12月 1月': '12,1'
};

// 静态显示数据
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

// 静态数据
const FROM_CITY = 'FROM_CITY';

export { paramsMap, FROM_CITY, fromCityList, fromMonthList, toCityList };
