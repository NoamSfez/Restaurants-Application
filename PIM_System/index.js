import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv"; //environment variables
import RestaurantsDAO from "./dao/restaurantsDAO.js";
import ReviewsDAO from "./dao/reviewsDAO.js";
dotenv.config();

const MongoClient = mongodb.MongoClient;
const port = process.env.PORT || 8000;

try {
  let client = await MongoClient.connect(process.env.RESTREVIEWS_DB_URI);
  await RestaurantsDAO.injectDB(client);
  await ReviewsDAO.injectDB(client);
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
} catch (err) {
  console.error(err.stack);
  process.exit(1);
}