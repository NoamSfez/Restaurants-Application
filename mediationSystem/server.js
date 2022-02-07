import CustommersRouter from "./api/Routers/CustommersRouter.js";
import RestaurantsRouter from "./api/Routers/RestaurantsRouter.js";

/**
 * To use both import and require syntaxes
 */
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const Koa = require("koa");
const app = new Koa();
const koaBody = require("koa-body");

/**
 * by default only the body of ['POST', 'PUT', 'PATCH'] methods are parse by koa-body
 * so we have to add 'DELETE'
 * from: https://github.com/koajs/koa-body/blob/master/index.js
 */
app.use(
  koaBody({
    parsedMethods: ["POST", "PUT", "DELETE"],
  })
);

//Basic error handling middleware
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    err.status = err.statusCode || err.status || 500;
    ctx.body = err.message;

    ctx.app.emit("error", err, ctx);
  }
});

app.use(CustommersRouter.routes(), CustommersRouter.allowedMethods());
app.use(RestaurantsRouter.routes(), RestaurantsRouter.allowedMethods());

export default app;
