import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb://knandula:aor8hC9Tg4TlJAC1@cluster0.siydj.mongodb.net/alphacodeDB?retryWrites=true&w=majority"
  );

  return client;
}
