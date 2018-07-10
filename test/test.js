var assert = require('power-assert');
var nameize = require('../index.js');

describe('camelCase', function () {
  var camelCase = nameize.camelCase;

  it('ab_cd_efg to abCdEfg', function () {
    assert(camelCase('ab_cd_efg') === 'abCdEfg');
  });

  it('Ab_Cd_Efg to abCdEfg', function () {
    assert(camelCase('Ab_Cd_Efg') === 'abCdEfg');
  });

  it('AB_Cd_EfG to aBCdEfG', function () {
    assert(camelCase('AB_Cd_EfG') === 'aBCdEfG');
  });

  it('_AB_Cd_EfG to aBCdEfG', function () {
    assert(camelCase('_AB_Cd_EfG') === 'aBCdEfG');
  });

  it('_.AB _Cd/_EfG to aBCdEfG', function () {
    assert(camelCase('_.AB _Cd/_EfG') === 'aBCdEfG');
  });

  it('_.AB _Cd/_E\\fG to aBCdEFG', function () {
    assert(camelCase('_.AB _Cd/_E\\fG') === 'aBCdEFG');
  });
});

describe('snakeCase', function () {
  var snakeCase = nameize.snakeCase;

  it('abCdEfG to ab_cd_ef_g', function () {
    assert(snakeCase('abCdEfG') === 'ab_cd_ef_g');
  });

  it('AbCdEfG to ab_cd_ef_g', function () {
    assert(snakeCase('AbCdEfG') === 'ab_cd_ef_g');
  });

  it('Ab_Cd_Ef_G to ab_cd_ef_g', function () {
    assert(snakeCase('Ab_Cd_Ef_G') === 'ab_cd_ef_g');
  });

  it('_Ab_Cd_Ef_G to ab_cd_ef_g', function () {
    assert(snakeCase('_Ab_Cd_Ef_G') === 'ab_cd_ef_g');
  });

  it('_.Ab _Cd/_Ef_\\G to ab_cd_ef_g', function () {
    assert(snakeCase('_.Ab _Cd/_Ef_\\G') === 'ab_cd_ef_g');
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
    var camelize = nameize.camelize;

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

  it('snakeize', function () {
    var snakeize = nameize.snakeize;
    
    var obj = snakeize(camelObj);

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
