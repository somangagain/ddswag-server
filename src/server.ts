import "./env";

import "./database"
import app from "./app"

const { PORT } = process.env;

if (!PORT) {
  throw new Error('environment variables are not set');
}

app.listen(PORT, () => {
  process.send?.('ready');
  console.info(`server is listening on ${PORT}`);
});

process.on('SIGINT', function () {
  process.exit(0);
});