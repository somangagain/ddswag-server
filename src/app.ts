import Koa from "koa";
import cors from "@koa/cors";
import bodyParser from 'koa-bodyparser';
import routes from './routes';

const app = new Koa();

app.proxy = true;
app.use(cors());
app.use(bodyParser());
app.use(routes.routes()).use(routes.allowedMethods());

export default app;