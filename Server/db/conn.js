import mongoose from "mongoose"
mongoose.connect("mongodb://localhost:27017/Blog",{
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
    // useCreateIndex:true,
}).then(()=>{
    console.log("connection successful");
}).catch((e)=>{
    console.log(e);
    console.log("no connection");
})
