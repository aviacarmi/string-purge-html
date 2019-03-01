# string-purge-html

purge all html markup from es6 template literal tag

# Install
```
npm i string-purge-html
```

```js
import purgeHtml from 'string-purge-html';
const item = "teapot";
const str = purgeHtml`<h1>I'm a <strong>${item}</strong></h1>`;
console.log(str);
```

Should print:
```
I'm a teapot
```