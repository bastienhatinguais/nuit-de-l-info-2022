var path = require('path');
var rootPath = path.normalize(__dirname + '/../..');

const directory = {
  root: rootPath,
  distDir: rootPath + '/dist',
  assetsDir: rootPath + '/public',
  controllerDir: rootPath + '/controllers',
};

export default directory;
