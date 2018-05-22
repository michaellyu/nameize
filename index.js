function snakelize(target) {
  var clone;
  switch (Object.prototype.toString.call(target)) {
    case '[object Object]':
      clone = {};
      Object
        .keys(target)
        .forEach(function (key) {
          clone[toSnakeCase(key)] = snakelize(target[key]);
        });
      break;
    case '[object Array]':
      clone = [];
      target
        .forEach(function (item, index) {
          clone[index] = snakelize(item);
        });
      break;
    default:
      clone = target;
  }
  return clone;
}

function toSnakeCase(name) {
  if (!name) return '';

  return name
    .trim()
    .replace(/[-_.\\/\s]*([A-Z])/g, function (all, letter, index) {
      return index === 0
        ? letter.toLowerCase()
        : `_${letter.toLowerCase()}`;
    });
}

function camelize(target) {
  var clone;
  switch (Object.prototype.toString.call(target)) {
    case '[object Object]':
      clone = {};
      Object
        .keys(target)
        .forEach(function (key) {
          clone[toCamelCase(key)] = camelize(target[key]);
        });
      break;
    case '[object Array]':
      clone = [];
      target
        .forEach(function (item, index) {
          clone[index] = camelize(item);
        });
      break;
    default:
      clone = target;
  }
  return clone;
}

function toCamelCase(name) {
  if (!name) return '';

  return name
    .trim()
    .replace(/(?:^|[-_.\\/\s]+)([a-zA-Z])/g, function (all, letter, index) {
      return index === 0
        ? letter.toLowerCase()
        : letter.toUpperCase();
    });
}

module.exports = {
  camelize: camelize,
  snakelize: snakelize,
  toCamelCase: toCamelCase,
  toSnakeCase: toSnakeCase
};

