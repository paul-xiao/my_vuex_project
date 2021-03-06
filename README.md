# my_vue_lab

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



## target 

- element-UI

```bash
# install
npm i element-ui -S

# generate custom theme

npm i element-theme -g
npm i element-theme-chalk -D

et -i [可以自定义变量文件]

> ✔ Generator variables file

et

> ✔ build theme font
> ✔ build element theme

# 搭配插件按需引入组件主题
# 如果是搭配 babel-plugin-component 一起使用，只需要修改 .babelrc 的配置，指定 styleLibraryName 路径为自定义主题相对于 .babelrc 的路径，注意要加 ~。

{
  "plugins": [["component", [
    {
      "libraryName": "element-ui",
      "styleLibraryName": "~theme"
    }
  ]]]
}

```

## ElementUI

```
# import
import '../theme/index.css'
import ElementUI from 'element-ui';

Vue.use(ElementUI)

# resetFields
<el-form-item label="username" prop="username"> //必须有prop属性
```

## axios config

```
# install
npm i axios -D

# create instance
var $http = axios.create({
  baseURL: '/', // anything you want
  timeout: 20000,
  headers: {
     'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
  }
});


# proxyTable 代理失效，原因不明。。

```
## vuex

```
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions,
  getters
})

```



## auth config
