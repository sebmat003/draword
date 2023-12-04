import mongoose from "mongoose";

class Database {
  connect() {
    mongoose
      .connect(process.env.DATABASE_URL as string)
      .then(() => console.log("Connected to mongoose database"))
      .catch((error) => console.log(`Database connection failed - ${error}`));
  }
}

export default Database;
