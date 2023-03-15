// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
//   // publicPath: process.env.NODE_ENV === "production" ? "/my-project/" : "/",
//   publicPath: "./",
//   lintOnSave: false,
//   devServer: {
//     host: "localhost",

//     port: "8080",

//     https: false,

//     proxy: {
//       "/api": {
//         target: " http://gmall-h5-api.atguigu.cn",
//         // pathRewrite: { "^/api": "" },
//       },
//     },
//   },
// });

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    host: "localhost",

    port: "8080",

    https: false,

    proxy: {
      "/api": {
        target: " http://gmall-h5-api.atguigu.cn", // pathRewrite: { "^/api": "" },
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
});
