const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/tourism",{
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true,
}).then(()=>{
    console.log("Connection is successfull");
}).catch((e)=>{
    console.log(e);
})

