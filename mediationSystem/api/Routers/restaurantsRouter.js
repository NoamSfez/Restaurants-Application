import RestaurantsController from "../Controllers/RestaurantsController.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const Router = require("@koa/router");
const RestaurantsRouter = new Router();
RestaurantsRouter.prefix("/api/mediation/v1");

/*
description: get all the restaurants
path: api/mediation/v1/restaurants/
*/
RestaurantsRouter.get("/restaurants", RestaurantsController.getAllRestaurants);

/*
description: get one restaurant by his ID and all of his reviews
path: api/mediation/v1/restaurant/123
*/
RestaurantsRouter.get(
  "/restaurant/:id",
  RestaurantsController.getRestaurantById
);

/*
description: get list of all cuisines
path: api/mediation/v1/restaurants/cuisines
*/
RestaurantsRouter.get(
  "/restaurants/cuisines",
  RestaurantsController.getRestaurantsCuisines
);

/*
description: get all the restaurants filter by name/zipcode/cuisine/perPage/numOfPage
path: api/mediation/v1/restaurants/filterby?cuisine=Afghan
*/
RestaurantsRouter.get(
  "/restaurants/filterby",
  RestaurantsController.getRestaurantsFilterBy
);

/*
description: create a new review on a restaurant
path: api/mediation/v1/restaurant/5eb3d668b31de5d588f42950/review
body:{
	"text":"Super",
	"user_id":"342722238",
	"name":"Noam"
}
*/
RestaurantsRouter.post(
  "/restaurant/:restaurant_id/review",
  RestaurantsController.createReview
);

export default RestaurantsRouter;
