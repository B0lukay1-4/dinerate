import mongoose from "mongoose";

let isConnected = false; //track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
// if not connected we try to establish the connecttion
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
// options object
dbNmae:"dine_rate",
useNewUrlParser:true,
useUnifiedTopology:true,
    });
    // if connected correctly we set isConnected to true

    isConnected =true;
    console.log("MongoDB connected");
  } catch (error) {
console.log(error);
  }
};
