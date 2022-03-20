import axios from "axios";

let instance = axios.create();

export default class CustomersController {
  static async getAllCustomers(ctx, next) {
    const rep = await instance.get("http://localhost:8080/api/customers/");
    ctx.response.body = { customers: rep.data };
  }

  static async getCustomerById(ctx, next) {
    const customer_id = ctx.params.customer_id;
    const rep = await instance.get(
      `http://localhost:8080/api/customer/${customer_id}`
    );
    ctx.response.body = { customer: rep.data };
  }

  static async createCustomer(ctx, next) {
    const body = ctx.request.body;
    const rep = await instance.post(
      "http://localhost:8080/api/customer/",
      body
    );
    ctx.response.body = { new_customer: rep.data };
  }

  static async modifyCustomer(ctx, next) {
    const customer_id = ctx.params.customer_id;
    const body = ctx.request.body;
    const rep = await instance.put(
      `http://localhost:8080/api/customer/${customer_id}`,
      body
    );
    ctx.response.body = { updated_customer: rep.data };
  }

  static async deleteCustomer(ctx, next) {
    const customer_id = ctx.params.customer_id;
    const rep = await instance.delete(
      `http://localhost:8080/api/customer/${customer_id}`
    );
    ctx.response.body = { response: rep.data };
  }
  // static async deleteAllCustomers(ctx, next) {
  //   const body = ctx.request.body;
  //   const rep = await instance.delete(
  //     `http://localhost:8080/api/customers`,
  //     body
  //   );
  //   ctx.response.body = { response: rep.data };
  // }
}
