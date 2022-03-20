import CustomersController from "../Controllers/CustomersController.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const Router = require("@koa/router");
const CustomersRouter = new Router();
CustomersRouter.prefix("/api/mediation/v1");

/*
method: GET
description: Get all the customers
path: api/mediation/v1/customers
*/
CustomersRouter.get("/customers", CustomersController.getAllCustomers);

/*
method: GET
description:Get customer by his ID
path: api/mediation/v1/customer/123
*/
CustomersRouter.get(
  "/customer/:customer_id",
  CustomersController.getCustomerById
);

/*
method: POST
description: Create a new customer
path: api/mediation/v1/customer
body:{
	"firstName": "abc",
	"lastName": "def",
	"email":"abc.def@gmail.com"
}
*/
CustomersRouter.post("/customer", CustomersController.createCustomer);

/*
method:PUT
description: Update a customer
path: api/mediation/v1/custommer
body:{
	"lastName": "abc",
	"firstName": "def",
	"email":"abc.def@gmail.com"
}
*/
CustomersRouter.put(
  "/customer/:customer_id",
  CustomersController.modifyCustomer
);

/*
method:DELETE
description: Delete a customer
path: api/mediation/v1/custommer
*/
CustomersRouter.delete(
  "/customer/:customer_id",
  CustomersController.deleteCustomer
);

export default CustomersRouter;
