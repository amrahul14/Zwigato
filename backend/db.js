const mongoose = require("mongoose");

const mongoURI =
  // "mongodb+srv://gofood:Rohit15@cluster0.jj7jdqa.mongodb.net/gofoodmern?retryWrites=true&w=majority";
  "mongodb://gofood:Rohit15@ac-nfzb9gz-shard-00-00.jj7jdqa.mongodb.net:27017,ac-nfzb9gz-shard-00-01.jj7jdqa.mongodb.net:27017,ac-nfzb9gz-shard-00-02.jj7jdqa.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-136ldo-shard-0&authSource=admin&retryWrites=true&w=majority";


  //video code...........
// const mongoDB = async () => {
//   await mongoose.connect(mongoURI, { useNewUrlParser: true }, async(err,res) => {
//     if(err)
//     console.log("---",err);
//     else{
//     console.log("connected");
//       const fetched_data = await mongoose.connection.db.collection("food_items");
//       fetched_data.find({}).toArray(function(err,data){
//           const foodCategory = await mongoose.connection.db.collection("foodCategory");
//           foodCategory.find({}).toArray(function(err,catData){
//             if(err) console.log(err);
//             else
//             {
//               global.food_items = data;
//               global.foodCategory = catData;
//             }
//           })
//       })
//     }
//   });
// }
//chat gpt final code.............
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });

    console.log("connected");

    const fetched_data = await mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();

    const foodCategory = await mongoose.connection.db.collection("foodCategory");
    const catData = await foodCategory.find({}).toArray();

    global.food_items = data;
    global.foodCategory = catData;
  } catch (err) {
    console.log("---", err);
  }
};

// then promise code chat gpt...........
// const mongoDB = () => {
//   mongoose
//     .connect(mongoURI, { useNewUrlParser: true })
//     .then(() => {
//       console.log("connected");
//       return mongoose.connection.db.collection("food_items").find({}).toArray();
//     })
//     // .then((data) => {
//     //   global.food_items = data;
      
//     // })
//     // .catch((err) => {
//     //   console.log("---", err);
//     // });
// };

module.exports = mongoDB;
