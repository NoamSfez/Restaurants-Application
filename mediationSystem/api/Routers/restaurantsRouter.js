import restaurantsController from "../Controllers/restaurantsController.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const Router = require("@koa/router");
const restaurantsRouter = new Router();
restaurantsRouter.prefix("/api/mediation/v1");

/*
description: get all the restaurants
path: api/v1/restaurants/
*/
restaurantsRouter.get("/restaurants", restaurantsController.getAllRestaurants);

/*
description: get a restaurant by ID and all of his reviews
method: GET
path: api/v1/restaurant/123
*/
// restaurantsRouter.get(
//   "restaurant/:id",
//   restaurantsController.GetRestaurantById
// );
/*
description: get all restaurants cuisines categories
method: GET
path: api/v1/restaurants/cuisines/
*/
// restaurantsRouter.get(
//   "restaurants/cuisines",
//   restaurantsController.GetRestaurantsCuisines
// );

/*
description: get all restaurants cuisines categories
method: GET
path: api/v1/restaurants/cuisines/
*/
// restaurantsRouter.get(
//   "restaurants/cuisines",
//   restaurantsController.GetRestaurantsCuisines
// );

// //point de depart c'est apres api/v1/restaurants
// router
//   .route("/review")
//   .post(ReviewsController.apiPostReview)
//   .put(ReviewsController.apiUpdateReview)
//   .delete(ReviewsController.apiDeleteReview);

export default restaurantsRouter;
