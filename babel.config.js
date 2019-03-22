// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'module:react-native-dotenv'
    ],
    // plugins: [
    //   [
    //     'module-resolver',
    //     {
    //       root: ['.'],
    //       alias: {
    //         api: './api',
    //         assets: './assets',
    //         theme: './theme',
    //         components: './components',
    //         screens: './screens',
    //         navigation: './navigation',
    //         test: './test',
    //         utils: './utils'
    //       }
    //     }
    //   ]
    // ]
  };
};
