import custommersRouter from "./api/Routers/custommersRouter.js";
import restaurantsRouter from "./api/Routers/restaurantsRouter.js";

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const Koa = require("koa");
const app = new Koa();

app.use(custommersRouter.routes(), custommersRouter.allowedMethods());
app.use(restaurantsRouter.routes(), restaurantsRouter.allowedMethods());

export default app;
