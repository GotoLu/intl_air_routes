const UA = window.navigator.userAgent;
export const isIos = /iphone|ipod/gi.test(UA);

function isArray(obj) {
  if (obj) {
    return typeof obj === 'object' && obj.length !== undefined;
  }
  return false;
}

export default function parseToScheme(name, params) {
  const prefix = isIos ? 'qunariphone' : 'qunaraphone';
  if (typeof params !== 'object') {
    return `${prefix}://${name}`;
  }
  params = Object.keys(params)
    .reduce((prev, next) => {
      const key = next;
      let content = params[key];
      if (!content) {
        return prev;
      }
      if (typeof content === 'object' || isArray(content)) {
        content = JSON.stringify(content);
      }
      content = `${key}=${content}`;
      prev.push(content);
      return prev;
    }, [])
    .join('&');
  return `${prefix}://${name}?${params}`;
}
