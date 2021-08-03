# Short-URL

使用 Node.js + Express + express-handlebars + mongoDB 打造的 Short-URL 網頁。

## Getting Started

本專案已經設定 npm script, 因此可以直接透過 npm install 與 npm run 的方式來執行。

### Development environment

| Package            | Version  |
| ------------------ | -------- |
| mac Big Sur        | 11.4     |
| VS code            | 1.57.1   |
| Node.js            | v14.17.1 |
| Npm                | 7.19.0   |
| Nvm                | 0.34.0   |
| Nodemon            | 2.0.7    |
| Express            | 4.17.1   |
| Express-handlebars | 5.3.2    |
| Mongoose           | 5.13.2   |
| MongoDB            | 4.2.5    |
| method-override    | 3.0.0    |
| standard           | 16.0.3   |
| base62             | 2.0.1    |

### Description

- 使用者可以在表單輸入原始網址後畫面會回傳格式化後的短網址
- 在伺服器啟動期間，使用者可以透過短綱址，來導向到原本的網站
- 使用者可以按 Copy-URL 來複製縮短後的網址
- 使用者可以點擊畫面左上角來回到首頁

### Installing

1. 透過 https 取得此專案

```bash
$ git clone https://github.com/Kcih4518/AC-S2-3-W4-Short-URL-Generator.git
```

2. 安裝 node module

```bash
$ cd AC-S2-3-W4-Short-URL-Generator
$ npm install
```

3. 透過 npm 在 local 啟動 web server

```bash
$ npm run dev
Express is running on http://localhost:3000
```

4. 透過 Browser 打開 [http://localhost:3000](http://localhost:3000)

![](https://i.imgur.com/3Gsu1L4.png)
