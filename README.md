## Launch Server

```bash
$ cd mediationSystem
$ npm start
```

### koa context principles

```javascript
"http://localhost:3000/api/data/:data_id?name=data_name";
body = { value: "data_value" };
console.log(ctx.request.body); //{ value:'data_value' }
console.log(ctx.params); // { data_id:'XXX' }
console.log(ctx.request.query); //[Object: null prototype] { name: 'data_name' }
```
