function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
// eslint-disable-next-line
const parse = (qs, sep, eq, options) => {
  sep = sep || '&';
  eq = eq || '=';
  const obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  const regexp = /\+/g;
  qs = qs.split(sep);

  let maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    // eslint-disable-next-line
    maxKeys = options.maxKeys;
  }

  let len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (let i = 0; i < len; ++i) {
    const x = qs[i].replace(regexp, '%20');
    const idx = x.indexOf(eq);
    let kstr;
    let vstr;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    const k = decodeURIComponent(kstr);
    const v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (Array.isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

const stringifyPrimitive = (v) => {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return Number.isFinite(v) ? v : '';

    default:
      return '';
  }
};

const stringify = (obj, sep, eq, name) => {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return Object.keys(obj).map((k) => {
      const ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (Array.isArray(obj[k])) {
        return obj[k].map(v => ks + encodeURIComponent(stringifyPrimitive(v))).join(sep);
      }
      return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
    }).join(sep);
  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

const QueryString = {
  parse,
  stringify
};

export default QueryString;
