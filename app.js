// console.log('Task Manager App')
const express = require('express') 
const app = express();
// const path = require('path');
const signup = require('./routes/signup')
const connectDB = require('./db/connect');
const Signup = require('./models/Signup');
// const hbs = require('hbs');
require('dotenv').config()
//middleware

app.use(express.static('./public'));
app.use(express.json())


// const tamplates_path = path.join(__dirname,"../tamplates/views");
// const particals_path = path.join(__dirname,"../tamplates/partials");

// app.set('view engine', 'ejs');
// app.set("views", tamplates_path);
// hbs.registerPartials(particals_path);

//routes
// app.get('/hello', (req,res)=>{
//     res.send('Task manager app');
// } );
// app.use('/', function(req, res, next){
//     res.render(index)
//     next();
// });
app.use('/api/v1/signup', signup)
const port = 3000;
 
const start = async () =>{
    try{
        
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log('server is running on port '+port));
    }catch(err){
        console.log(err)
    }
}
start()



 