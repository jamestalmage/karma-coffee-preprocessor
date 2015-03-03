module.exports = function(karma){
  karma.set({
    files:['test.coffee'],

    preprocessors: {
      '*.coffee': ['coffee']
    },

    coffeePreprocessor: {
      options: {
        bare: true,
        sourceMap: true
      }
    },

    singleRun: true,
    autoWatch: false,

    browsers:['Chrome']
  })
}