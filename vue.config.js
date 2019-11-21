// module.exports = {
//   "transpileDependencies": [
//     "vuetify"
//   ],
//   scss:{
//     loaderOptions:{
//       sass:{
// data:'@import "~@/sass/main.css" ',
//       }
      
//     }
//   },
//   chainWebpack: config => {
//     ["vue-modules", "normal-modules", "normal"].forEach((match)=>{
//       config.module.rule('scss').oneOf(match).use('sass-loader')
//       // eslint-disable-next-line no-undef
//       .tap(opt => Object.assign(opt, {data: '@import "~@/sass/main.css"'}))
//     })
//   }
// }