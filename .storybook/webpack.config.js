// https://github.com/kadirahq/react-storybook/blob/master/docs/setting_up_for_css.md#css-with-meteor
const path = require('path');

module.exports = {
   module: {
      loaders: [
         {
            test: /\.css?$/,
            loaders: ['style', 'raw'],
            include: path.resolve(__dirname, '../'),
         },
      ],
   },
};
