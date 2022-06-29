import App from './app';
import 'dotenv/config';

const app = new App().express;

const PORT = process.env.DB_PORT;

app.listen(PORT, () => {
  console.log(`APP LISTENING PORT: ${PORT}`);
});
