## 第二章 配置

### 实例 2

#### hash chunkhash contenthash 的区别

<br>

> hash: hash值和整个项目的构建有关；整个项目文件的hash值都用同一个值；项目某一个文件的更改，都会引发hash值的更改。

| modify     | origin | app.css | app.js | vendor.js |  return |
| --------   | :----: | :----:  | :----: | :----:    | :----:  |
| app.css    |  e614  |  b0da   |  73d8  |  f32d     |   e614  |
| app.js     |  e614  |  b0da   |  73d8  |  f32d     |   e614  |
| vendor.js  |  e614  |  b0da   |  73d8  |  f32d     |   e614  |

<br><br>

> contenthash: 根据文件的内容生成对应的contenthash值，文件没有更改，contenthash不变。

| modify     | origin | app.css | app.js | vendor.js |  return |
| --------   | :----: | :----:  | :----: | :----:    | :----:  |
| app.css    |  5efc  |  3565   |  3565  |  3565     |   5efc  |
| app.js     |  a2b7  |  a2b7   |  8083  |  8083     |   a2b7  |
| vendor.js  |  401a  |  401a   |  401a  |  afb4     |   401a  |


<br><br>

> chunkhash: 根据不同入口文件进行依赖文件解析，生成对应的chunkhash值；某一个依赖文件更改了，整个依赖相关的文件chunkhash都会更改。

| modify     | origin | app.css | app.js | vendor.js |  return |
| --------   | :----: | :----:  | :----: | :----:    | :----:  |
| app.css    |  db1b  |  2cd0   |  b386  |  b386     |   db1b  |
| app.js     |  db1b  |  2cd0   |  b386  |  b386     |   db1b  |
| vendor.js  |  98c2  |  98c2   |  98c2  |  0650     |   98c2  |