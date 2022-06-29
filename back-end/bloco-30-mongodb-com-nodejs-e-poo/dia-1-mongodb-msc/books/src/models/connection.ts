import mongoose from 'mongoose';
import 'dotenv/config';

const DB_NAME = process.env.DB_NAME;

const connection = (mongoDatabaseURI = `mongodb://localhost:/${DB_NAME}`) =>
  mongoose.connect(mongoDatabaseURI);

export default connection;
