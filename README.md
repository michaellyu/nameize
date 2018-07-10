Nameize
========

Camelize & Snakeize

### Installing

```shell
yarn add nameize # npm install nameize
```

### How To Use

```javascript
const { camelize, snakeize, camelCase, snakeCase } = require('nameize');

const snakeObj = {
  primary_key: 1,
  numbers: [1, 4, 7, 3, 6, 9],
  members: [
    { first_name: 'Jianmi', last_name: 'Wen' },
    { first_name: 'Shayu', last_name: 'Li' },
    { first_name: 'Xujian', last_name: 'Jiang' },
  ],
};

const camelObj = {
  primaryKey: 1,
  numbers: [1, 4, 7, 3, 6, 9],
  members: [
    { firstName: 'Jianmi', lastName: 'Wen' },
    { firstName: 'Shayu', lastName: 'Li' },
    { firstName: 'Xujian', lastName: 'Jiang' },
  ],
};

const obj = camelize(snakeObj); // obj same as camelObj
const obj2 = snakeize(camelObj); // obj2 same as snakeObj
const camelName = camelCase('name_to_name'); // camelName value is 'nameToName'
const snakeName = snakeCase('nameToName'); // snakeName value is 'name_to_name'
```

### Example

```javascript
const { camelize, snakeize } = require('nameize');

let data;
axios
  .get('path-to-api')
  .then((res) => {
    // Before use
    data = camelize(res.data);
  });

// Before send
const data2 = snakeize(data);
axios
  .post('path-to-api', data2);
```
