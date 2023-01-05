const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Project')
.then(()=>{
    console.log('Connection Is Estabilished!!');
})
.catch((err)=>{
    console.log(`err is : ${err}`)
})