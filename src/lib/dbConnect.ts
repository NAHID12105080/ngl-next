import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI || " ", {});
    console.log(db);

    connection.isConnected = db.connections[0].readyState;
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
