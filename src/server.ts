import "./env";

import "./database"
import app from "./app"

const { NODE_ENV, MONGO_URI, PORT } = process.env;

console.log(NODE_ENV)

if (!NODE_ENV || !MONGO_URI || !PORT) {
  throw new Error('environment variables are not set');
}

app.listen(PORT, () => {
  process.send?.('ready');
  console.info(`server is listening on ${PORT}`);
});

process.on('SIGINT', function () {
  process.exit(0);
});