import RestaurantsController from "../Controllers/RestaurantsController.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const Router = require("@koa/router");
const RestaurantsRouter = new Router();
RestaurantsRouter.prefix("/api/mediation/v1");

/*
method: GET
description: Get all the restaurants
path: api/mediation/v1/restaurants/
*/
RestaurantsRouter.get("/restaurants", RestaurantsController.getAllRestaurants);

/*
method: GET
description: Get one restaurant by his ID and all of his reviews
path: api/mediation/v1/restaurant/123
*/
RestaurantsRouter.get(
  "/restaurant/:id",
  RestaurantsController.getRestaurantById
);

/*
method: GET
description: Get list of all cuisines and count
path: api/mediation/v1/restaurants/cuisines
*/
RestaurantsRouter.get(
  "/restaurants/cuisines",
  RestaurantsController.getRestaurantsCuisines
);

/*
method: GET
description: Get all the restaurants filter by name/zipcode/cuisine/perPage/numOfPage
path: api/mediation/v1/restaurants/filterby?cuisine=Afghan
*/
RestaurantsRouter.get(
  "/restaurants/filterby",
  RestaurantsController.getRestaurantsFilterBy
);

/*
method: POST
description: Create a new review on a restaurant
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
method: PUT
description: Modify a review on a restaurant if the user_id correspond to the review creator id
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
method: DELETE
description: Delete a review on a restaurant if the user_id correspond to the review creator id
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
