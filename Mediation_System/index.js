import app from "./server.js";

const port = process.env.PORT || 6000;
const host = process.env.HOST || "localhost";

app.listen(port, () => console.log(`Listening on ${host}:${port}...`));
