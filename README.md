# isOkvedJs

Модуль проверки валидности кода ОКВЭД.

### Установка:
```sh
$ npm install isOkvedJs --save
```

### Пример использования
#### NodeJS
```js
const isOkved = require('isOkvedJs');
let isOkvedResult = isOkved("11.22.33");
console.log( isOkvedResult ) // print: true
```
#### Browser
```html
<script src="/node_modules/isOkvedJs/isOkved.js"></script>
<script>
    var isOkvedResult = isOkved("11.22.33");
    console.log( isOkvedResult ) // print: true
</script>
```