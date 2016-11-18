# isOkvedJs

Модуль проверки валидности кода ОКВЭД.

### Установка:
```sh
$ npm install is-okved-js --save
```

### Пример использования
#### NodeJS
```js
const isOkved = require('is-okved-js');
let isOkvedResult = isOkved("11.22.33");
console.log( isOkvedResult ) // print: true
```
#### Browser
```html
<script src="/node_modules/is-okved-js/isOkved.js"></script>
<script>
    var isOkvedResult = isOkved("11.22.33");
    console.log( isOkvedResult ) // print: true
</script>
```