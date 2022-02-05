import axios from "axios";

let instance = axios.create();

export default class RestaurantsController {
  static async getAllRestaurants(ctx, next) {
    let rep = await instance.get("http://localhost:8000/api/v1/restaurants");
    ctx.response.body = rep.data;
  }
}
