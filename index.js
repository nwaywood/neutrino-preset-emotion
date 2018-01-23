const loaderMerge = require('@neutrinojs/loader-merge');

module.exports = (neutrino, options) => {
  neutrino.use(loaderMerge('compile', 'babel'), {
    plugins: ['emotion']
  });
};
