import RestaurantsController from "../Controllers/RestaurantsController.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const Router = require("@koa/router");
const RestaurantsRouter = new Router();
RestaurantsRouter.prefix("/api/mediation/v1");

/*
description: GET all the restaurants
path: api/mediation/v1/restaurants/
*/
RestaurantsRouter.get("/restaurants", RestaurantsController.getAllRestaurants);

/*
description: GET one restaurant by his ID and all of his reviews
path: api/mediation/v1/restaurant/123
*/
RestaurantsRouter.get(
  "/restaurant/:id",
  RestaurantsController.getRestaurantById
);

/*
description: GET list of all cuisines
path: api/mediation/v1/restaurants/cuisines
*/
RestaurantsRouter.get(
  "/restaurants/cuisines",
  RestaurantsController.getRestaurantsCuisines
);

/*
description: GET all the restaurants filter by name/zipcode/cuisine/perPage/numOfPage
path: api/mediation/v1/restaurants/filterby?cuisine=Afghan
*/
RestaurantsRouter.get(
  "/restaurants/filterby",
  RestaurantsController.getRestaurantsFilterBy
);

/*
description: POST a new review on a restaurant
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

/*
description: UPDATE a review on a restaurant if the user_id correspond to the review creator id
path: api/mediation/v1/restaurant/review/61fef91bbc9b1488b061d370
body:{
	"text":"Super",
	"user_id":"342722238",
}
*/
RestaurantsRouter.put(
  "/restaurant/review/:review_id",
  RestaurantsController.modifyReview
);
/*
description: DELETE a review on a restaurant if the user_id correspond to the review creator id
path: api/mediation/v1/restaurant/review/61fef91bbc9b1488b061d370
body:{
	"user_id":"342722238",
}
*/
RestaurantsRouter.delete(
  "/restaurant/review/:review_id",
  RestaurantsController.deleteReview
);

export default RestaurantsRouter;
