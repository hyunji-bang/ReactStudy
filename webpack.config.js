//----- webpack.config.js -----
module.exports = {
  entry: './main.js',                 // 진입파일
  output: {                           // 결과파일
    path: __dirname,
    filename: 'bundle.js'
  },
  context: __dirname,
  devtool: 'cheap-module-eval-source-map',  // 개발용 디버깅 기능
  module: {
    rules: [                          // 모듈별 핸들링 정의
      {
        test: /\.js$/,                // 정규표현식(조건 설정)
        exclude: [ /node_modules/ ],  // 제외할 경로
        include: [ /src/ ],           // 포함할 경로
        loader: 'babel-loader'        // 적용할 로더
      }
    ]
  },
  resolve: {
    modules: [ __dirname, 'node_modules' ],
    extensions: [ '.js' ]
  }
}