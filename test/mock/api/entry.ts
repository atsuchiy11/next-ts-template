// .tsを実行するためにbabelで動的コンパイルする

require('@babel/register')({
  extensions: ['.ts'],
  presets: ['next/babel'],
});

const server = require('./server.ts').default;
const PORT = 5001;

server.listen(PORT, function () {
  console.log('%s listening at %s', server.name, server.url);
});
