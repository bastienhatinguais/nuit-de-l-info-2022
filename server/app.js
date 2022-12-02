import path from 'path';
import app from './config/express';
import * as errorHandler from './middlewares/errorHandler';
import joiErrorHandler from './middlewares/joiErrorHandler';

// enable webpack hot module replacement in development mode
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack/webpack.config.dev';
import router from './routes/index.route';
import logger from './middlewares/logger';

const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('../swagger_output.json');

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, { publicPath: webpackConfig.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
  /*
  app.use(
    '/api/doc',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
      swaggerOptions: {
        basePath: '/api',
      },
    })
  );
  */
}

//app.use(logger);

// Router
app.use('/api', router);

// Joi Error Handler Middleware
app.use(joiErrorHandler);

// Error Handler Middleware
app.use(errorHandler.notFound);

// Landing page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Server running at http://${app.get('host')}:${app.get('port')}`);
});

export default app;
