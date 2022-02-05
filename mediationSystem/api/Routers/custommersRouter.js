import custommersController from "../Controllers/custommersController.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const Router = require("@koa/router");

const custommersRouter = new Router({ prefix: "api/v1/custommers" });

// custommersRouter.get("/", custommersController.getAllCustommers());

// router.get("undifined", "*", (ctx, next) =>
//   ctx.status(404).json({ error: "not found" })
// );

export default custommersRouter;
