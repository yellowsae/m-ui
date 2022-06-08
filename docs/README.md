# 快速开始

#### 安装组件库

```bash
npm i m-ui05
```

#### 引用组件库
> 在 main.js 中引用组件库

```javascript
//全部引入
import 'm-ui05/dist/css/index.css';
import MUI from 'm-ui05';
Vue.use(MUI)

//按需引入
import 'm-ui05/dist/css/button.css';
import {Button} from 'm-ui05';
Vue.use(Button);
```



<M-Button type='success' round>成功按钮</M-Button>
