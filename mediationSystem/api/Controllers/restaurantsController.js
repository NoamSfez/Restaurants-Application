import axios from "axios";

let instance = axios.create();

export default class RestaurantsController {
  static async getAllRestaurants(ctx, next) {
    let rep = await instance.get("http://localhost:8000/api/v1/restaurants");
    ctx.response.body = rep.data;
  }

  static async getRestaurantById(ctx, next) {
    let id = ctx.params.id;
    let rep = await instance.get(
      `http://localhost:8000/api/v1/restaurants/id/${id}`
    );
    ctx.response.body = rep.data;
  }

  static async getRestaurantsCuisines(ctx, next) {
    let rep = await instance.get(
      `http://localhost:8000/api/v1/restaurants/cuisines`
    );
    ctx.response.body = rep.data;
  }

  static async getRestaurantsFilterBy(ctx, next) {
    let url = ctx.request.url;
    let filter = url.substring(url.indexOf("filterby") + "filterby".length); //?cuisine=Afghan
    let rep = await instance.get(
      `http://localhost:8000/api/v1/restaurants/${filter}`
    );
    ctx.response.body = rep.data;
  }

  static async createReview(ctx, next) {
    let body = { ...ctx.params, ...ctx.request.body };
    let rep = await instance.post(
      "http://localhost:8000/api/v1/restaurants/review",
      body
    );
    ctx.response.body = rep.data;
  }
}
