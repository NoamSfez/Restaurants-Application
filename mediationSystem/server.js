import CustommersRouter from "./api/Routers/CustommersRouter.js";
import RestaurantsRouter from "./api/Routers/RestaurantsRouter.js";

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const Koa = require("koa");
const app = new Koa();
const koaBody = require("koa-body");
app.use(koaBody());

app.use(CustommersRouter.routes(), CustommersRouter.allowedMethods());
app.use(RestaurantsRouter.routes(), RestaurantsRouter.allowedMethods());

export default app;
