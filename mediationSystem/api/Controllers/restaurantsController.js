import axios from "axios";

let instance = axios.create();

export default class RestaurantsController {
  static async getAllRestaurants(ctx, next) {
    const rep = await instance.get("http://localhost:8000/api/v1/restaurants");
    ctx.response.body = rep.data;
  }

  static async getRestaurantById(ctx, next) {
    const id = ctx.params.id;
    const rep = await instance.get(
      `http://localhost:8000/api/v1/restaurants/id/${id}`
    );
    ctx.response.body = rep.data;
  }

  static async getRestaurantsCuisines(ctx, next) {
    const rep = await instance.get(
      `http://localhost:8000/api/v1/restaurants/cuisines`
    );
    ctx.response.body = rep.data;
  }

  static async getRestaurantsFilterBy(ctx, next) {
    const url = ctx.request.url;
    const filter = url.substring(url.indexOf("filterby") + "filterby".length); //?cuisine=Afghan
    const rep = await instance.get(
      `http://localhost:8000/api/v1/restaurants/${filter}`
    );
    ctx.response.body = rep.data;
  }

  static async createReview(ctx, next) {
    const body = { ...ctx.params, ...ctx.request.body };
    const rep = await instance.post(
      "http://localhost:8000/api/v1/restaurants/review",
      body
    );
    ctx.response.body = rep.data;
  }

  static async modifyReview(ctx, next) {
    const body = { ...ctx.params, ...ctx.request.body };
    const rep = await instance.put(
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
    const body = ctx.request.body;
    const review_id = ctx.params.review_id;
    const rep = await instance.delete(
      `http://localhost:8000/api/v1/restaurants/review?id=${review_id}`,
      { data: body } // have to be specific in this format and not just body like other mthods
    );
    ctx.response.body = rep.data;
  }
}
