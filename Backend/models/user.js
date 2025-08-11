import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, 
)

const User = mongoose.model("User", userSchema);
export default User;




// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
// name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   role: {
//     type: String,
//     required: true,
//     default: "User",
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   image: {
//     type: String,
//     required: true
//   }
// },
// )

// const User = mongoose.model("User", userSchema);
// export default User;