const path = require("path")

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.module
      .rule("svg")
      .exclude.add(resolve("src/assets/icons"))
      .end()
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        simbolId: "icon-[name]",
      })
      .end()
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/assets/tokens/tokens.scss";
            @import "@/assets/tokens/tokens.map.scss";
            @import "@/styles/styles.scss";
          `,
      },
    },
  },
}
