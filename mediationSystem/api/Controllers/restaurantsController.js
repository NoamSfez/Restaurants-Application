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
  static async modifyReview(ctx, next) {
    let body = { ...ctx.params, ...ctx.request.body };
    let rep = await instance.put(
      "http://localhost:8000/api/v1/restaurants/review",
      body
    );
    ctx.response.body = rep.data;
  }

  static async deleteReview(ctx, next) {
    /**
     *  Unlike axios.post() and axios.put(),the 2nd param to axios.delete() is the Axios options, not the request body.
     *  To send a request body with a DELETE request, you should use the data option.
     */
    let body = ctx.request.body;
    let review_id = ctx.params.review_id;
    let rep = await instance.delete(
      `http://localhost:8000/api/v1/restaurants/review?id=${review_id}`,
      { data: body } // have to be specific in this format and not just body like other mthods
    );
    ctx.response.body = rep.data;
  }
}
