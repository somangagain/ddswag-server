import Router from '@koa/router';
import api from './api/index';

const routes = new Router();

routes.use('/api', api.routes());

routes.get('/', async ctx => {
  ctx.body = {
    message: 'ddswag-server',
  };
});

export default routes;