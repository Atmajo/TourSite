import mongoose from "mongoose";

function authdbConnect() {
  mongoose
    .connect(
      "mongodb+srv://toursite:toursiteadmin1234@cluster0.mn4g9sa.mongodb.net/bookDB?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Successfully connected to authDB!");
    })
    .catch((err) => {
      console.log(err);
    });
}

export default authdbConnect;
