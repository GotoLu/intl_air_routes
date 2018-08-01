// 判断是否是ios系统
const osDetect = (ua) => {
  const os = {};
  const ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);

  if (iphone && !ipod) {
    os.ios = true;
    os.iphone = true;
    os.version = iphone[2].replace(/_/g, '.');
  }
  if (ipad) {
    os.ios = true;
    os.ipad = true;
    os.version = ipad[2].replace(/_/g, '.');
  }
  if (ipod) {
    os.ios = true;
    os.ipod = true;
    os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
  }
  return os;
};

const schemePrefix = () => {
  const clientArray = navigator.userAgent.toLowerCase().match(/(^|\s)(qunar[^/]+)\/([\d.]+)/);
  const scheme = clientArray && clientArray[2];
  const version = clientArray && clientArray[3];

  if (scheme) {
    return {
      scheme,
      version
    };
  }
  return osDetect(navigator.userAgent).ios ? {
    scheme: 'qunariphone',
    version: ''
  } : {
    scheme: 'qunaraphone',
    version: ''
  };
};

export const isIphone = /iphone/.test(schemePrefix().scheme.toLowerCase());

export const isIphoneX = isIphone && /m\/10.[3,6]/.test(navigator.userAgent.toLowerCase());

const isEmptyObject = obj => JSON.stringify(obj) === '{}';

export const isClient = /q|Qunar/g.test(navigator.userAgent);

export const param2query = (param) => {
  if (typeof param !== 'object') return '';
  const queries = [];
  const keys = Object.keys(param);
  keys.forEach((key) => {
    if (param[key]) {
      queries.push(`${key}=${param[key]}`);
    }
  });
  return queries.join('&');
};

const open = (url, opt) => {
  if (!url) return;
  opt = Object.assign({
    data: {},
    type: 'webview' // scheme
  }, opt || {});

  let scheme = '';
  let query = '';

  if (/q|Qunar/g.test(navigator.userAgent)) {
    ({ scheme } = schemePrefix());
  }
  if (!isEmptyObject(opt.data)) {
    query = param2query(opt.data);
  }

  // 若不在客户端内,则直接浏览器打开
  if (!scheme) {
    if (opt.type === 'webview') {
      window.location.href = url;
    }
    return;
  }
  if (opt.type === 'webview') {
    window.location.href = `${scheme}://hy?${query ? `&${query}` : ''}url=${encodeURIComponent(url)}`;
  } else {
    window.location.href = `${scheme}://${url}${query ? `&${query}` : ''}`;
  }
};

export const query2param = (query) => {
  if (typeof query !== 'string') return {};
  const param = {};
  let kv;
  const params = query.split('&');
  for (let i = 0, len = params.length; i < len; i++) {
    if (params[i]) {
      kv = params[i].split('=');

      if (kv.length > 2) {
        for (let j = 0, len1 = kv.length; j < len1; j++) {
          kv[1] = j > 1 ? kv[1].concat(`=${kv[j]}`) : kv[1];
        }
      }
      if (kv[0] && kv[1]) [, param[kv[0]]] = kv;
    }
  }
  return param;
};

export default (schemeUrl, data) => {
  open(schemeUrl, {
    type: 'scheme',
    data: data || {}
  });
};
