const mongoose=require("mongoose");

main().then(()=>{
    console.log ("successfully connected")
}).catch ((err)=>{
    console.log ("crate some error", err)
})
async function main(){
 await mongoose.connect("mongodb://127.0.0.1:27017/test")
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,

})

const User = mongoose.model("User", userSchema);

User.findById({_id: "69b7d5af5a01428197795dc4"}).then((res)=>{
    console.log (res)
})
.catch((err)=>{
    console.log (err)
})








// User.insertMany([
//     {name:"tony", email:"tony@gmamil.com", age :22},
//     {name:"mony", email:"mony@gmamil.com", age :23},
//     {name:"peter", email:"peter@gmamil.com", age :33},
// ])
// .then((res)=>{
//     console.log (res)
// }).catch((err)=>{
//     console.log(err)
// })









// const user2= new User ({
    // name: "vishu",
    // email: "vishusrivastava@gmail.com",
    // age: 21,
// });

// user2.save()
// .then((res)=>{
//     console.log (res)
// })
// .catch((err)=>{
//     console.log (err)
// })