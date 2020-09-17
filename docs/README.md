---
home: true
heroImage: /img/vue.png
heroText: imgzoom-li
tagline: 一个可以查看图片(可以缩放,拖拽)的JS插件
actionText: 快速上手 →
actionLink: /guide/
footer: MIT Licensed | Copyright © 2018-present Evan You
---

### 像常规的js插件一样

>目前还未整理

### 或者像引入模块一样

安装 imgzoom-li

> npm install imgzoom-li  -D

在需要查看的图片上添加 class="imgZoom"

```html
<img class="imgZoom" src="./Img/202001034.png" alt="示例图片" >
```

在 script 中使用

```javascript
import imgli from 'imgzoom-li'
imgli.init()
```