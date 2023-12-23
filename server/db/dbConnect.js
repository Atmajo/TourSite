import mongoose from "mongoose";

function dbConnect() {
  mongoose
    .connect(
      "mongodb+srv://toursite:toursiteadmin1234@cluster0.mn4g9sa.mongodb.net/authDB?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Successfully connected !");
    })
    .catch((err) => {
      console.log(err);
    });
}

export default dbConnect;
