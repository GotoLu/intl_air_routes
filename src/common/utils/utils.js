// 百度转谷歌坐标
function b2GPoint(bdLat, bdLng) {
  const pi = (3.14159265358979324 * 3000.0) / 180.0;
  const x = bdLng - 0.0065;
  const y = bdLat - 0.006;
  const z = Math.sqrt(((x * x) + (y * y)) - (0.00002 * Math.sin(y * pi)));
  const theta = Math.atan2(y, x) - (0.000003 * Math.cos(x * pi));
  const gcjLng = z * Math.cos(theta);
  const gcjLat = z * Math.sin(theta);
  return {
    lat: gcjLat,
    lng: gcjLng
  };
}

// 谷歌转百度坐标
function g2BPoint(gLat, gLng) {
  const pi = (3.14159265358979324 * 3000.0) / 180.0;
  const x = gLng;
  const y = gLat;
  const z = Math.sqrt((x * x) + (y * y)) + (0.00002 * Math.sin(y * pi));
  const theta = Math.atan2(y, x) + (0.000003 * Math.cos(x * pi));
  const bLng = (z * Math.cos(theta)) + 0.0065;
  const bLat = (z * Math.sin(theta)) + 0.006;
  return {
    lat: bLat,
    lng: bLng
  };
}

function isIphoneX() {
  const ua = window.navigator.userAgent;
  return /iphone/gi.test(ua) && /m\/10.[3,6]/.test(ua);
}

export default {
  b2GPoint,
  g2BPoint,
  isIphoneX
};
