var assert = require('power-assert');
var namelize = require('../index.js');

describe('toCamelCase', function () {
  var toCamelCase = namelize.toCamelCase;

  it('ab_cd_efg to abCdEfg', function () {
    assert(toCamelCase('ab_cd_efg') === 'abCdEfg');
  });

  it('Ab_Cd_Efg to abCdEfg', function () {
    assert(toCamelCase('Ab_Cd_Efg') === 'abCdEfg');
  });

  it('AB_Cd_EfG to aBCdEfG', function () {
    assert(toCamelCase('AB_Cd_EfG') === 'aBCdEfG');
  });

  it('_AB_Cd_EfG to aBCdEfG', function () {
    assert(toCamelCase('_AB_Cd_EfG') === 'aBCdEfG');
  });

  it('_.AB _Cd/_EfG to aBCdEfG', function () {
    assert(toCamelCase('_.AB _Cd/_EfG') === 'aBCdEfG');
  });

  it('_.AB _Cd/_E\\fG to aBCdEFG', function () {
    assert(toCamelCase('_.AB _Cd/_E\\fG') === 'aBCdEFG');
  });
});

describe('toSnakeCase', function () {
  var toSnakeCase = namelize.toSnakeCase;

  it('abCdEfG to ab_cd_ef_g', function () {
    assert(toSnakeCase('abCdEfG') === 'ab_cd_ef_g');
  });

  it('AbCdEfG to ab_cd_ef_g', function () {
    assert(toSnakeCase('AbCdEfG') === 'ab_cd_ef_g');
  });

  it('Ab_Cd_Ef_G to ab_cd_ef_g', function () {
    assert(toSnakeCase('Ab_Cd_Ef_G') === 'ab_cd_ef_g');
  });

  it('_Ab_Cd_Ef_G to ab_cd_ef_g', function () {
    assert(toSnakeCase('_Ab_Cd_Ef_G') === 'ab_cd_ef_g');
  });

  it('_.Ab _Cd/_Ef_\\G to ab_cd_ef_g', function () {
    assert(toSnakeCase('_.Ab _Cd/_Ef_\\G') === 'ab_cd_ef_g');
  });
});

describe('transform all of the properties of the object', function () {
  var snakeObj = {
    primary_key: 1,
    numbers: [1, 4, 7, 3, 6, 9],
    members: [
      { first_name: 'Jianmi', last_name: 'Wen' },
      { first_name: 'Shayu', last_name: 'Li' },
      { first_name: 'Xujian', last_name: 'Jiang' },
    ],
  };

  var camelObj = {
    primaryKey: 1,
    numbers: [1, 4, 7, 3, 6, 9],
    members: [
      { firstName: 'Jianmi', lastName: 'Wen' },
      { firstName: 'Shayu', lastName: 'Li' },
      { firstName: 'Xujian', lastName: 'Jiang' },
    ],
  };

  it('camelize', function () {
    var camelize = namelize.camelize;

    var obj = camelize(snakeObj);

    assert(obj.primaryKey === camelObj.primaryKey);
    assert(Object.prototype.toString.call(obj.numbers) === '[object Array]');
    assert(obj.numbers[0] === camelObj.numbers[0]);
    assert(obj.numbers[1] === camelObj.numbers[1]);
    assert(obj.numbers[2] === camelObj.numbers[2]);
    assert(obj.numbers[3] === camelObj.numbers[3]);
    assert(obj.numbers[4] === camelObj.numbers[4]);
    assert(obj.numbers[5] === camelObj.numbers[5]);
    assert(Object.prototype.toString.call(obj.members) === '[object Array]');
    assert(obj.members[0].firstName === camelObj.members[0].firstName);
    assert(obj.members[0].lastName === camelObj.members[0].lastName);
    assert(obj.members[1].firstName === camelObj.members[1].firstName);
    assert(obj.members[1].lastName === camelObj.members[1].lastName);
    assert(obj.members[2].firstName === camelObj.members[2].firstName);
    assert(obj.members[2].lastName === camelObj.members[2].lastName);
  });

  it('snakelize', function () {
    var snakelize = namelize.snakelize;
    
    var obj = snakelize(camelObj);

    assert(obj.primary_key === snakeObj.primary_key);
    assert(Object.prototype.toString.call(obj.numbers) === '[object Array]');
    assert(obj.numbers[0] === snakeObj.numbers[0]);
    assert(obj.numbers[1] === snakeObj.numbers[1]);
    assert(obj.numbers[2] === snakeObj.numbers[2]);
    assert(obj.numbers[3] === snakeObj.numbers[3]);
    assert(obj.numbers[4] === snakeObj.numbers[4]);
    assert(obj.numbers[5] === snakeObj.numbers[5]);
    assert(Object.prototype.toString.call(obj.members) === '[object Array]');
    assert(obj.members[0].first_name === snakeObj.members[0].first_name);
    assert(obj.members[0].last_name === snakeObj.members[0].last_name);
    assert(obj.members[1].first_name === snakeObj.members[1].first_name);
    assert(obj.members[1].last_name === snakeObj.members[1].last_name);
    assert(obj.members[2].first_name === snakeObj.members[2].first_name);
    assert(obj.members[2].last_name === snakeObj.members[2].last_name);
  });
});
